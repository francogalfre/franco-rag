import { readdir } from "node:fs/promises"
import { join } from "node:path"

import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { LibSQLVector } from "@mastra/libsql"
import { MDocument } from "@mastra/rag"
import { embedMany } from "ai"

import { env, VECTOR_INDEX, EMBEDDING_MODEL } from "@/config"


const openrouter = createOpenRouter({
    apiKey: env.OPENROUTER_API_KEY,
});

const vector = new LibSQLVector({
    id: "libsql-vector",
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
})

const CONTENT_DIR = join(import.meta.dir, "../../content")

async function ingestFile(file: string, isFirst: boolean) {
    const text = await Bun.file(join(CONTENT_DIR, file)).text()

    const doc = MDocument.fromMarkdown(text)
    const chunks = await doc.chunk({ strategy: "recursive", maxSize: 512, overlap: 50 })

    if (chunks.length === 0) return

    const { embeddings } = await embedMany({
        model: openrouter.textEmbeddingModel(EMBEDDING_MODEL),
        values: chunks.map((c) => c.text),
    })

    if (isFirst) {
        const dim = embeddings[0]?.length
        if (!dim) throw new Error("Empty embedding response")

        await vector.createIndex({ indexName: VECTOR_INDEX, dimension: dim }).catch(() => { })
    }

    await vector.upsert({
        indexName: VECTOR_INDEX,
        vectors: embeddings,
        metadata: chunks.map((c) => ({
            text: c.text,
            source: file.replace(".md", ""),
        })),
    })

    console.log(`[${file}] ${chunks.length} chunks ingested`)
}

const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"))
console.log(`Found ${files.length} files`)

for (let i = 0; i < files.length; i++) {
    await ingestFile(files[i] as string, i === 0)
}

console.log("Done.")

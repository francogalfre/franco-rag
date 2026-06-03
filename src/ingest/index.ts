import { join } from "node:path"
import { MDocument } from "@mastra/rag"
import { embedMany } from "ai"

import { EMBEDDING_MODEL } from "@/config"
import { openrouter } from "@/utils/openrouter"

import { resetIndex, setupIndex, save } from "@/ingest/vector"
import type { FileResult } from "@/ingest/types"

const CONTENT_DIR = join(process.cwd(), "content")

async function processFile(file: string): Promise<FileResult | null> {
    const text = await Bun.file(join(CONTENT_DIR, file)).text()

    const chunks = await MDocument.fromMarkdown(text).chunk({
        strategy: "recursive",
        maxSize: 512,
        overlap: 50,
    })

    if (chunks.length === 0) return null

    const { embeddings } = await embedMany({
        model: openrouter.textEmbeddingModel(EMBEDDING_MODEL),
        values: chunks.map((c) => c.text),
    })

    return { file, chunks, embeddings }
}

const files = [...new Bun.Glob("*.md").scanSync(CONTENT_DIR)]
console.log(`Found ${files.length} files`)

const results: FileResult[] = []

for (const file of files) {
    const result = await processFile(file)
    if (result) results.push(result)
}

const dimension = results[0]?.embeddings[0]?.length
if (!dimension) throw new Error("No embeddings generated")

await resetIndex()
await setupIndex(dimension)

for (const { file, chunks, embeddings } of results) {
    await save(file, chunks, embeddings)
    console.log(`[${file}] ${chunks.length} chunks`)
}

console.log("Done.")

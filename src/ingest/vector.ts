import { LibSQLVector } from "@mastra/libsql"
import { env, VECTOR_INDEX } from "@/config"

export const vector = new LibSQLVector({
    id: "libsql-vector",
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
})

export async function resetIndex() {
    try {
        await vector.deleteIndex({ indexName: VECTOR_INDEX })
        console.log("Index cleared")
    } catch {
        console.log("No existing index found, skipping clear")
    }
}

export async function setupIndex(dimension: number) {
    await vector.createIndex({ indexName: VECTOR_INDEX, dimension })
}

export async function save(file: string, chunks: { text: string }[], embeddings: number[][]) {
    await vector.upsert({
        indexName: VECTOR_INDEX,
        vectors: embeddings,
        metadata: chunks.map((c) => ({
            text: c.text,
            source: file.replace(".md", ""),
        })),
    })
}

import { z } from "zod"

const EnvSchema = z.object({
    // ----------- Model
    OPENROUTER_API_KEY: z.string().min(1),
    LLM_MODEL: z.string().default("openrouter/mistralai/mistral-7b-instruct"),

    // ----------- Database
    DATABASE_URL: z.string().default("file:./franco.db"),
    DATABASE_AUTH_TOKEN: z.string().optional(),

    // ----------- Github
    GITHUB_TOKEN: z.string().optional(),
    GITHUB_USERNAME: z.string().default("francogalfre"),
})

const parsed = EnvSchema.safeParse(process.env)

if (!parsed.success) {
    console.error("[config] Variables de entorno inválidas:")
    console.error(parsed.error.flatten().fieldErrors)
    process.exit(1)
}

export const env = parsed.data

// Constantes compartidas
export const VECTOR_INDEX = "franco_knowledge"
export const EMBEDDING_MODEL = "openai/text-embedding-3-small"
export const EMBEDDING_DIM = 1536

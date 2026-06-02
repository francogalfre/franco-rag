import { z } from "zod"

const EnvSchema = z.object({
    // --------- LLM
    OPENROUTER_API_KEY: z.string().min(1),
    LLM_MODEL: z.string().default("openrouter/minimax/minimax-m2.5:free"),

    // --------- Storage
    DATABASE_URL: z.string().min(1),
    DATABASE_AUTH_TOKEN: z.string().min(1),

    // --------- Github
    GITHUB_TOKEN: z.string().optional(),
    GITHUB_USERNAME: z.string().default("francogalfre"),
})

const parsed = EnvSchema.safeParse(process.env)

if (!parsed.success) {
    console.error("[config] Variables de entorno inválidas:")
    console.error(parsed.error)
    process.exit(1)
}

export const env = parsed.data

export const VECTOR_INDEX = "franco_knowledge"
export const EMBEDDING_MODEL = "nvidia/llama-nemotron-embed-vl-1b-v2:free"
export const RERANKER_MODEL_ID = env.LLM_MODEL.replace(/^openrouter\//, "")

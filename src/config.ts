import { z } from "zod"

const EnvSchema = z.object({
    // --------- LLM
    OPENROUTER_API_KEY: z.string().min(1),
    LLM_MODEL: z.string().default("openrouter/minimax/minimax-m2.5:free"),

    // --------- Observability
    LANGFUSE_PUBLIC_KEY: z.string().optional(),
    LANGFUSE_SECRET_KEY: z.string().optional(),
    LANGFUSE_BASE_URL: z.string().optional(),

    // --------- Storage
    DATABASE_URL: z.string().min(1),
    DATABASE_AUTH_TOKEN: z.string().min(1),

    // --------- Github
    GITHUB_TOKEN: z.string().optional(),
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
export const LLM_MODEL_ID = env.LLM_MODEL.replace(/^openrouter\//, "")

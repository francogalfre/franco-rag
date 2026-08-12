import { env } from "@/config"

export const ragAgentModel = [
    {
        model: env.LLM_MODEL,
        maxRetries: 2,
        modelSettings: { maxOutputTokens: 600 }
    },
    {
        model: env.LLM_MODEL_FALLBACK,
        maxRetries: 3,
        modelSettings: { maxOutputTokens: 600 }
    },
]

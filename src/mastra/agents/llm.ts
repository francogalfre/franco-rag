import { env } from "@/config"

export const ragAgentModel = [
    {
        model: env.LLM_MODEL,
        maxRetries: 2,
        modelSettings: { maxOutputTokens: 600 }
    },
    {
        model: "openrouter/openai/gpt-oss-120b:free",
        maxRetries: 3,
        modelSettings: { maxOutputTokens: 600 }
    },
]

import { env } from "@/config"

export const ragAgentModel = [{ model: env.LLM_MODEL, modelSettings: { maxOutputTokens: 600 } }]

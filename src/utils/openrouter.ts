import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { env } from "@/config"

export const openrouter = createOpenRouter({ apiKey: env.OPENROUTER_API_KEY })

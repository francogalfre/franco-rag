import { Agent } from "@mastra/core/agent";
import { env } from "@/config";

import { ragPrompt } from "@/mastra/agents/prompts/rag.prompt";

export const ragAgent = new Agent({
    id: 'rag-agent',
    name: "Rag Agent",
    instructions: ragPrompt,
    model: env?.LLM_MODEL || "openrouter/minimax/minimax-m2.5:free"
})

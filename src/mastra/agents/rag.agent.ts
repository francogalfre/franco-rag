import { env } from "@/config"

import { Agent } from "@mastra/core/agent"
import { scorers } from "@/mastra/evals"

import { ragAgentMemory } from "@/mastra/stores/memory"
import { ragAgentPrompt } from "@/mastra/agents/prompts/rag.prompt"
import { vectorQueryTool, mcpTools } from "@/mastra/tools"


export const ragAgent = new Agent({
    id: "rag-agent",
    name: "RAG Agent",
    instructions: ragAgentPrompt,
    model: [{ model: env.LLM_MODEL, modelSettings: { maxOutputTokens: 400 } }],
    tools: { vectorQueryTool, ...mcpTools },
    scorers,
    memory: ragAgentMemory
})

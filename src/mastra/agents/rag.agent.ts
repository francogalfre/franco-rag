import { Agent } from "@mastra/core/agent"

import { ragAgentPrompt } from "@/mastra/agents/prompts/rag.prompt"
import { scorers } from "@/mastra/evals"
import { ragAgentMemory } from "@/mastra/stores/memory"
import { ragAgentModel } from "@/mastra/agents/llm"

import { vectorQueryTool, fetchUrlTool, mcpTools } from "@/mastra/tools"

export const ragAgent = new Agent({
    id: "rag-agent",
    name: "RAG Agent",
    scorers,
    instructions: ragAgentPrompt,
    model: ragAgentModel,
    memory: ragAgentMemory,
    tools: { vectorQueryTool, fetchUrlTool, ...mcpTools },
})

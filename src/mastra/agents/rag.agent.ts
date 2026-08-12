import { Agent } from "@mastra/core/agent"

import { ragAgentPrompt } from "./prompts/rag.prompt.js"
import { scorers } from "../evals/index.js"
import { ragAgentMemory } from "../stores/memory.js"
import { ragAgentModel } from "./llm.js"

import { vectorQueryTool, fetchUrlTool, mcpTools } from "../tools/index.js"

export const ragAgent = new Agent({
    id: "rag-agent",
    name: "RAG Agent",
    scorers,
    instructions: ragAgentPrompt,
    model: ragAgentModel,
    memory: ragAgentMemory,
    tools: { vectorQueryTool, fetchUrlTool, ...mcpTools },
})

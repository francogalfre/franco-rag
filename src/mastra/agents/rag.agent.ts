import { Agent } from "@mastra/core/agent"
import { LIBSQL_PROMPT } from "@mastra/libsql"
import { Memory } from "@mastra/memory"

import { env } from "@/config"
import { ragPrompt } from "@/mastra/agents/prompts/rag.prompt"
import { vectorQueryTool } from "@/mastra/tools/rag.tool"

export const ragAgent = new Agent({
    id: "rag-agent",
    name: "RAG Agent",
    instructions: `${ragPrompt} \n\n ${LIBSQL_PROMPT}`,
    model: [{ model: env.LLM_MODEL, modelSettings: { maxOutputTokens: 400 } }],
    tools: { vectorQueryTool },
    memory: new Memory({
        options: {
            lastMessages: 20,
        },
    }),
})

import { Mastra } from "@mastra/core"

import { ragAgent } from "@/mastra/agents/rag.agent"
import { libsqlVector } from "@/mastra/stores"

export const mastra = new Mastra({
    agents: { ragAgent },
    vectors: { libsqlVector },
})

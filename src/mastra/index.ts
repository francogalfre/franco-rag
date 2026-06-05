import { Mastra } from "@mastra/core"

import { ragAgent } from "@/mastra/agents/rag.agent"
import { logger, observability } from "@/mastra/observability"
import { libsqlStorage, libsqlVector } from "@/mastra/stores"

export const mastra = new Mastra({
    agents: { ragAgent },
    vectors: { libsqlVector },
    storage: libsqlStorage,
    logger,
    observability,
})

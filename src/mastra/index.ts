import { Mastra } from "@mastra/core"

import { ragAgent } from "@/mastra/agents/rag.agent"
import { logger, observability } from "@/mastra/observability"
import { libsqlStorage, libsqlVector } from "@/mastra/stores"

export const mastra = new Mastra({
    agents: { ragAgent },
    storage: libsqlStorage,
    vectors: { libsqlVector },
    logger,
    observability,
})

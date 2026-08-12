import { Mastra } from "@mastra/core"

import { ragAgent } from "../mastra/agents/rag.agent.js"
import { logger, observability } from "./observability/index.js"
import { libsqlStorage, libsqlVector } from "./stores/index.js"

export const mastra = new Mastra({
    agents: { ragAgent },
    vectors: { libsqlVector },
    storage: libsqlStorage,
    logger,
    observability,
})

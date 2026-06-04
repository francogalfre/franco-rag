import { Mastra } from "@mastra/core"
import { VercelDeployer } from "@mastra/deployer-vercel"

import { ragAgent } from "@/mastra/agents/rag.agent"
import { logger } from "@/mastra/observability"
import { libsqlStorage, libsqlVector } from "@/mastra/stores"

export const mastra = new Mastra({
    agents: { ragAgent },
    vectors: { libsqlVector },
    storage: libsqlStorage,
    logger,
    deployer: new VercelDeployer(),
})

import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { createVectorQueryTool } from "@mastra/rag"

import { env, VECTOR_INDEX, EMBEDDING_MODEL } from "@/config"

const openrouter = createOpenRouter({ apiKey: env.OPENROUTER_API_KEY })

export const vectorQueryTool = createVectorQueryTool({
    vectorStoreName: "libsqlVector",
    description:
        "Search Franco Galfre's knowledge base. Use this to answer questions about his experience, projects, skills, education, technologies, and background. Always use this tool before answering any question about Franco.",
    indexName: VECTOR_INDEX,
    model: openrouter.textEmbeddingModel(EMBEDDING_MODEL),
    enableFilter: true,
})

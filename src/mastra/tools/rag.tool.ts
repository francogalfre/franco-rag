import { createVectorQueryTool } from "@mastra/rag"

import { EMBEDDING_MODEL, VECTOR_INDEX, } from "@/config"
import { openrouter } from "@/utils/openrouter"

export const vectorQueryTool = createVectorQueryTool({
    vectorStoreName: "libsqlVector",
    indexName: VECTOR_INDEX,
    model: openrouter.textEmbeddingModel(EMBEDDING_MODEL),
    description:
        "Search Franco Galfre's knowledge base. Use this to answer questions about his experience, projects, skills, education, technologies, and background. Always use this tool before answering any question about Franco.",
    enableFilter: true,
})

import { LangfuseExporter } from "@mastra/langfuse"
import { MastraStorageExporter, Observability } from "@mastra/observability"

export const observability = new Observability({
    configs: {
        default: {
            serviceName: "franco-rag",
            exporters: [new MastraStorageExporter(), new LangfuseExporter()],
            logging: {
                enabled: true,
                level: "info",
            },
        },
    },
})

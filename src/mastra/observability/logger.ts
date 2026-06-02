import { PinoLogger } from "@mastra/loggers"

export const logger = new PinoLogger({
    name: "franco-rag",
    level: "info",
    prettyPrint: true,
})

import { createTool } from "@mastra/core/tools"
import { z } from "zod"

export const fetchUrlTool = createTool({
    id: "fetch-url",
    description: "Fetch a public web page by URL and return its text content.",
    inputSchema: z.object({ url: z.string() }),
    outputSchema: z.object({ url: z.string(), text: z.string() }),
    execute: async ({ url }) => {
        const res = await fetch(url, {
            headers: { "user-agent": "franco-rag-agent" },
            signal: AbortSignal.timeout(8000),
        })

        const html = await res.text()

        const text = html
            .replace(/<script[\s\S]*?<\/script>/gi, "")
            .replace(/<style[\s\S]*?<\/style>/gi, "")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim()

        return { url, text }
    },
})

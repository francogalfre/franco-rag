import { Mastra } from "@mastra/core";

import { ragAgent } from "@/mastra/agents/rag.agent"

export const mastra = new Mastra({
    agents: { ragAgent }
})

const stream = await ragAgent.stream("Hi, how are you?")

for await (const chunk of stream.textStream) {
    process.stdout.write(chunk)
}

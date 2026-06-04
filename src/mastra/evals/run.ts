import { mastra } from "@/mastra"

import { evalDataset } from "@/mastra/evals/dataset"
import { createAnswerRelevancyScorer } from "@mastra/evals/scorers/prebuilt"

import { LLM_MODEL_ID } from "@/config"
import { openrouter } from "@/utils/openrouter"

const model = openrouter.chat(LLM_MODEL_ID)
const scorer = createAnswerRelevancyScorer({ model })

const dataset = await mastra.datasets.create({
    name: `franco-rag-evals`,
    description: "Ground-truth Q&A baseline for franco-rag agent",
})

await dataset.addItems({
    items: evalDataset.map((item) => ({
        input: item.question,
        groundTruth: item.expectedAnswer,
    })),
})

const summary = await dataset.startExperiment({
    name: "baseline",
    targetType: "agent",
    targetId: "rag-agent",
    scorers: [scorer],
    maxConcurrency: 1,
})

for (const result of summary.results) {
    console.log(`\nQ: ${result.input}`)
    console.log(`A: ${result.output}`)
    if (result.scores) {
        for (const score of result.scores) {
            console.log(`  Score [${score.scorerId}]: ${score.score}`)
        }
    }
}

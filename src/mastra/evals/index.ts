import {
    createAnswerRelevancyScorer,
    createFaithfulnessScorer,
    createHallucinationScorer,
} from "@mastra/evals/scorers/prebuilt"

import { LLM_MODEL_ID } from "@/config"
import { openrouter } from "@/utils/openrouter"

const model = openrouter.chat(LLM_MODEL_ID)

export const scorers = {
    answerRelevancy: {
        scorer: createAnswerRelevancyScorer({ model }),
        sampling: { type: "ratio" as const, rate: 0.1 },
    },
    faithfulness: {
        scorer: createFaithfulnessScorer({ model }),
        sampling: { type: "ratio" as const, rate: 0.1 },
    },
    hallucination: {
        scorer: createHallucinationScorer({ model }),
        sampling: { type: "ratio" as const, rate: 0.1 },
    },
}

import { Mastra } from '@mastra/core';
import { Agent } from '@mastra/core/agent';
import { z } from 'zod';

"use strict";
const EnvSchema = z.object({
  // ----------- Model
  OPENROUTER_API_KEY: z.string().min(1),
  LLM_MODEL: z.string().default("openrouter/mistralai/mistral-7b-instruct"),
  // ----------- Database
  DATABASE_URL: z.string().default("file:./franco.db"),
  DATABASE_AUTH_TOKEN: z.string().optional(),
  // ----------- Github
  GITHUB_TOKEN: z.string().optional(),
  GITHUB_USERNAME: z.string().default("francogalfre")
});
const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("[config] Variables de entorno inv\xE1lidas:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}
const env = parsed.data;
const VECTOR_INDEX = "franco_knowledge";
const EMBEDDING_MODEL = "openai/text-embedding-3-small";
const EMBEDDING_DIM = 1536;

"use strict";
const ragPrompt = `You are a helpful assistant`;

"use strict";
const ragAgent = new Agent({
  id: "rag-agent",
  name: "Rag Agent",
  instructions: ragPrompt,
  model: env?.LLM_MODEL || "openrouter/minimax/minimax-m2.5:free"
});

"use strict";
const mastra = new Mastra({
  agents: {
    ragAgent
  }
});

export { mastra };

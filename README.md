# Franco's RAG Agent

A RAG-powered agent that answers questions about Franco Galfre, built with Mastra, LibSQL, and OpenRouter free models.

---

## How it works

```
content/*.md  →  ingest  →  embed  →  LibSQL (vectors)
                                           ↓
user query  →  embed  →  vector search  →  rerank  →  LLM  →  response
```

1. **Ingest** — Markdown files from `content/` are chunked and embedded using OpenRouter's free embedding model, then stored in a LibSQL vector database (Turso).
2. **Query** — The RAG agent embeds the user's query, retrieves the top-K most similar chunks, and passes them as context to the LLM.
3. **Memory** — Conversation history is persisted per thread in LibSQL, so the agent remembers previous messages within the same chat.

---

## Setup

```bash
bun install
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=
DATABASE_URL=
DATABASE_AUTH_TOKEN=
LLM_MODEL=openrouter/z-ai/glm-4.5-air:free
```

---

## Commands

```bash
# Ingest content into the vector database
bun run ingest

# Start Mastra Studio (dev server + UI)
bun run dev
```

---

## Project structure

```
src/
├── config.ts              # Environment variables and shared constants
├── ingest/
│   └── index.ts           # Reads content/*.md, embeds and stores in LibSQL
├── utils/
│   └── openrouter.ts      # Shared OpenRouter client
└── mastra/
    ├── index.ts           # Mastra instance (agents, storage, vectors)
    ├── stores/
    │   ├── memory.ts      # LibSQLStore for conversation history
    │   └── vectors.ts     # LibSQLVector for embeddings
    ├── agents/
    │   ├── rag.agent.ts   # RAG agent with memory and tool
    │   └── prompts/
    │       └── rag.prompt.ts
    └── tools/
        └── rag.tool.ts    # Vector search tool
```

---

## Content

The knowledge base lives in `content/` as plain Markdown files:

- `about.md` — Background, goals, work style
- `experience.md` — Work history
- `projects.md` — Side projects
- `technologies.md` — Tech stack
- `education.md` — University and learning
- `contact.md` — Contact info

To update the knowledge base, edit the `.md` files and run `bun run ingest` again.

---

## Roadmap

- [ ] Observability — traces and logs via `@mastra/observability`
- [ ] Evals — answer relevancy and faithfulness scoring via `@mastra/evals`
- [ ] Re-ranking — improve retrieval quality with LLM-based reranking

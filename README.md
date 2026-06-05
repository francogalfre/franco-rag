# Franco RAG Agent

Personal AI agent that answers questions about me. Built with RAG, MCP tools, evals, and full observability 🧙‍♂️

Powered by [Mastra](https://mastra.ai) + OpenRouter free models + Turso (LibSQL) + Langfuse.

[Portfolio](https://francogalfre.site) · [GitHub](https://github.com/francogalfre)
<br>

## What's inside

- **RAG pipeline** — knowledge base from Markdown files, chunked, embedded and stored in a LibSQL vector store
- **GitHub MCP** — live data from public repos so the agent always has up-to-date project info
- **Memory** — per-thread conversation history persisted in LibSQL
- **Observability** — full traces and logs via Langfuse
- **Evals** — answer quality scoring with the Mastra datasets API

## Stack

Mastra · OpenRouter · LibSQL / Turso · Langfuse · Bun
<br>

## Setup

```bash
bun install
cp .env.example .env  # fill in your keys
bun run ingest        # embed content into the vector store
bun run dev           # start Mastra Studio
```

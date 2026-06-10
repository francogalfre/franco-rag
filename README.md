# Franco's AI Agent

AI assistant embedded in my portfolio. Ask me anything about my work, background, or projects — the agent searches my knowledge base and fetches live data from GitHub to give you accurate, up-to-date answers. 🗿

I built this to explore **RAG pipelines, MCP tool integration, and agent orchestration**. It's a living experiment in combining static knowledge with real-time data sources. 🪄

[Portfolio](https://francogalfre.site) · [GitHub](https://github.com/francogalfre) · [Email](mailto:francogalfre.work@gmail.com)

## How it works

- RAG Pipeline — Knowledge base from Markdown files, vectorized and stored in LibSQL
- GitHub MCP — Live project data so the agent stays current without manual updates
- Tool Routing — Smart decisions: GitHub for recent work, knowledge base for history, Context7 for tech explanations
- Memory — Conversation history per thread, persisted in LibSQL
- Observability — Full traces and evals via Langfuse

<br>

## Stack

Mastra · Openrouter · LibSQL/Turso · Langfuse · Bun · Drizzle

## Setup

```bash
bun install
cp .env.example .env
bun run ingest        # embed content into vectors
bun run dev           # start Mastra Studio
```

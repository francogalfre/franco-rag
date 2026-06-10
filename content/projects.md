# Projects

## 🧩 Franco RAG (this agent)

Personal AI assistant embedded in Franco's portfolio. Recruiters and visitors can ask anything about him — work, projects, skills, background — and get accurate, grounded answers powered by a RAG pipeline over his actual content.

**Tech stack:**
- Language: TypeScript
- Runtime: Bun
- AI orchestration: Mastra
- RAG: vector store with LibSQL, embedding + retrieval pipeline
- Tools: vectorQueryTool, fetch-url, GitHub MCP
- Memory: persistent conversation memory via LibSQL
- Evals: custom scorers for response quality
- Server: Hono with rate limiting

**Status:** Public, deployed.

Repository: https://github.com/francogalfre/franco-rag

## 👁️ Lens

Multi-agent AI system that analyzes and validates startup ideas from multiple angles. Given an idea, it returns competitor insights, market research, and strategic recommendations.

**Tech stack:**
- Language: TypeScript
- AI orchestration: LangChain, LangGraph
- Pattern: multiple specialized agents, each covering a different analysis dimension

**Status:** Public, deployed.

Repository: https://github.com/francogalfre/lens
Live: https://francogalfre.vercel.app/projects/lens

## 🎗️ Swear

Public commitment platform. Users make promises publicly and attach a financial commitment amount that is donated to a charity of their choice if they fail. Designed to create real accountability through social visibility and financial skin in the game.

**Terminology note:** never "stake" (gambling connotation) — always "commitment amount" or "commitment fund".

**Tech stack (production):**
- Monorepo: Turborepo, Bun
- Frontend: Next.js 15
- Backend: Hono
- API layer: tRPC
- Auth: Better-Auth
- ORM: Drizzle ORM
- Database: PostgreSQL via Supabase
- Payments: Polar
- Scheduled jobs: Vercel Cron

**Status:** Active development — Franco's current main project.

Repository: https://github.com/francogalfre/swear
Live: https://francogalfre.vercel.app

## ⚡ Vibrant

CLI tool that scans codebases for AI-generated code issues that get missed in standard code review. Zero config, runs instantly, powered by deep AI analysis.

**Tech stack:** TypeScript, CLI

**Status:** Public, MIT license.

Repository: https://github.com/francogalfre/vibrant
Live: https://francogalfre.vercel.app/projects/vibrant

## 🧠 Skills

A collection of reusable agent skills designed to enhance AI coding agents across development, design, and other workflows. Built to be composed and reused across projects.

**Status:** Public.

Repository: https://github.com/francogalfre/skills

## 🐾 Patitas

Pet adoption platform connecting animals in need with loving homes.

**Tech stack:** TypeScript, MIT license.

**Status:** Public.

Repository: https://github.com/francogalfre/patitas
Live: https://francogalfre.vercel.app/projects/patitas

## 💼 Freelanceo

All-in-one dashboard for freelancers to manage clients, projects, and invoices from a single interface.

**Tech stack:** TypeScript, Next.js.

**Status:** Public.

Repository: https://github.com/francogalfre/freelanceo
Live: https://francogalfre.vercel.app/projects/freelanceo

## 🚀 Astrotips

Collection of practical Astro tips and patterns, built with Astro itself.

**Status:** Public.

Repository: https://github.com/francogalfre/astrotips
Live: https://francogalfre.vercel.app/projects/astrotips

## 🔨 Promptsmith

TypeScript library for crafting structured system prompts with a fluent chainable API. Features: full type safety, context injection, few-shot examples, and guardrails.

**Tech stack:** TypeScript, library.

**Status:** Public.

Repository: https://github.com/francogalfre/promptsmith
Live: https://francogalfre.vercel.app/projects/promptsmith

## 🎬 Netflix Clone

Netflix UI clone built to practice full-stack patterns with Next.js, Prisma, Supabase, and shadcn/ui. A learning/portfolio artifact, not a production product.

**Tech stack:** Next.js, Prisma, Supabase, shadcn/ui.

**Status:** Public, completed.

Repository: https://github.com/francogalfre/netflix-clone

## 🌐 Portfolio

Franco's personal portfolio site. Reflects his minimalist design aesthetic. Built with modern static site tooling.

**Tech stack:** Astro v5, TypeScript, Tailwind CSS v4.

**Status:** Active, maintained.

Repository: https://github.com/francogalfre/portfolio
Live: https://francogalfre.site

## More Projects

Franco is always building. The full list of public repositories is at:
https://github.com/francogalfre

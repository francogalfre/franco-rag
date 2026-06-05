import { Hono } from "hono"

import { cors } from "hono/cors"
import { env } from "@/config"

import { mastra } from "@/mastra"
import { MastraServer, type HonoBindings, type HonoVariables } from "@mastra/hono"

import { securityMiddleware } from "@/server/middlewares"
import { rateLimitMiddleware } from "@/server/rate-limit"

const app = new Hono<{ Bindings: HonoBindings; Variables: HonoVariables }>()

const allowedOrigins = env.ALLOWED_ORIGIN
    ? env.ALLOWED_ORIGIN.split(",").map(o => o.trim())
    : ["*"]

app.use(
    "*",
    cors({
        origin: allowedOrigins,
        allowMethods: ["GET", "POST", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization", "x-mastra-client-type"],
        exposeHeaders: ["X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"],
        credentials: true,
    }),
)

app.use("*", securityMiddleware)
app.use("/api/agents/*", rateLimitMiddleware)

app.get("/health", c => c.json({ status: "ok", timestamp: new Date().toISOString() }))

const server = new MastraServer({ app, mastra, openapiPath: "/openapi.json" })
await server.init()

const port = env.PORT ?? 4111

Bun.serve({ port, fetch: app.fetch })
console.log(`[server] Listening on http://localhost:${port}`)

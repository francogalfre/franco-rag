import { env } from "@/config"
import app from "@/server/app"

Bun.serve({ port: env.PORT, fetch: app.fetch, idleTimeout: 120 })
console.log(`[server] Listening on http://localhost:${env.PORT}`)

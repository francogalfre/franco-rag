import { env } from "@/config"
import app from "@/index"

Bun.serve({ port: env.PORT, fetch: app.fetch, idleTimeout: 120 })
console.log(`[server] Listening on port ${env.PORT}`)

import { env } from "../config.js"
import app from "../index.js"

Bun.serve({ port: env.PORT, fetch: app.fetch, idleTimeout: 120 })
console.log(`[server] Listening on port ${env.PORT}`)

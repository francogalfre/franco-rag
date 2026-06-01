import { LibSQLVector } from "@mastra/libsql"
import { env } from "@/config"

export const libsqlVector = new LibSQLVector({
    id: "libsql-vector",
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
})

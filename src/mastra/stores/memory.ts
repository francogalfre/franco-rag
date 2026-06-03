import { LibSQLStore } from "@mastra/libsql"
import { Memory } from "@mastra/memory"

import { env } from "@/config"

export const libsqlStorage = new LibSQLStore({
    id: "libsql-storage",
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
})

export const ragAgentMemory = new Memory({
    options: {
        lastMessages: 20,
    },
})

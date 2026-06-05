import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const rateLimits = sqliteTable("rate_limits", {
    ip: text("ip").primaryKey(),
    count: integer("count").notNull().default(0),
    windowStart: integer("window_start").notNull(),
})

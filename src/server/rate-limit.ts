import { eq } from "drizzle-orm"
import type { MiddlewareHandler } from "hono"

import { db } from "@/utils/database"
import { rateLimits } from "@/db/schema"

const WINDOW_MS = 3 * 60_000
const MAX_REQUESTS = 5

function getIp(c: Parameters<MiddlewareHandler>[0]): string {
    return (
        c.req.header("cf-connecting-ip") ??
        c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ??
        "unknown"
    )
}

export const rateLimitMiddleware: MiddlewareHandler = async (c, next) => {
    const ip = getIp(c)
    const now = Date.now()

    try {
        const [existing] = await db
            .select()
            .from(rateLimits)
            .where(eq(rateLimits.ip, ip))

        const windowExpired = !existing || now - existing.windowStart >= WINDOW_MS
        const count = windowExpired ? 1 : existing.count + 1
        const windowStart = windowExpired ? now : existing.windowStart

        await db
            .insert(rateLimits)
            .values({ ip, count, windowStart })
            .onConflictDoUpdate({
                target: rateLimits.ip,
                set: { count, windowStart },
            })

        const remaining = Math.max(0, MAX_REQUESTS - count)

        c.header("X-RateLimit-Limit", String(MAX_REQUESTS))
        c.header("X-RateLimit-Remaining", String(remaining))
        c.header("X-RateLimit-Reset", String(Math.ceil((windowStart + WINDOW_MS) / 1000)))

        if (count > MAX_REQUESTS) {
            const retryAfter = Math.ceil((windowStart + WINDOW_MS - now) / 1000)
            return c.json(
                { error: "Too many requests. Try again shortly." },
                429,
                { "Retry-After": String(retryAfter) },
            )
        }
    } catch (err) {
        console.error("[rate-limit] DB error, skipping:", err)
    }

    await next()
}

import type { MiddlewareHandler } from "hono"

export const securityMiddleware: MiddlewareHandler = async (c, next) => {
    await next()

    c.header("X-Content-Type-Options", "nosniff")
    c.header("X-Frame-Options", "DENY")
    c.header("Referrer-Policy", "strict-origin-when-cross-origin")
    c.header("X-XSS-Protection", "1; mode=block")
    c.header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
}

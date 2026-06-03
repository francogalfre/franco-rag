import { MCPClient } from "@mastra/mcp";
import { env } from "@/config";

export const mcp = new MCPClient({
    servers: {
        github: {
            url: new URL("https://api.githubcopilot.com/mcp/"),
            requestInit: {
                headers: {
                    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
                },
            },
        },
        fetch: {
            command: "bunx",
            args: ["mcp-fetch-server"],
        },
    },
});

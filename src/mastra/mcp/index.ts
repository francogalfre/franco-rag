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
        context7: {
            url: new URL("https://mcp.context7.com/mcp"),
        }
    },
});

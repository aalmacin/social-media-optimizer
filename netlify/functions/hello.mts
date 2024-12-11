import type { Context, Config } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    return new Response("Hello, world!")
}

export const config: Config = {
    path: "/hello"
};
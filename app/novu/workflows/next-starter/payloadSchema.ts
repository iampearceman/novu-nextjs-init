import { z } from "zod";

export const payloadSchema = z.object({
    inAppSubject: z.string()
        .describe("The subject of the notification")
        .default("**Welcome to Novu!**"),
    inAppBody: z.string()
        .describe("The body of the notification")
        .default("This is an in-app notification powered by Novu."),
    inAppAvatar: z.string()
        .describe("The avatar of the notification")
        .default("https://avatars.githubusercontent.com/u/77433905?s=200&v=4"),
    
    
});
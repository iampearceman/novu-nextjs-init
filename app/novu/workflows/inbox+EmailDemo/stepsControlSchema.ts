import { z } from "zod";
import { CronExpression } from "@novu/framework";


export const emailControlSchema = z.object({
  subject: z.string().default("A Successful Test on Novu!"),
  body: z.string().default("This is a test email from Novu."),
});

export const inAppControlSchema = z.object({
  inAppSubject: z.string().default("**Welcome to Novu!**"),
  inAppBody: z.string().default("Congratulations on receiving your first notification in-app from Novu! Want to join our Discord?"),
  inAppAvatar: z.string().default("https://avatars.githubusercontent.com/u/63902456?v=4"),
  showInAppAvatar: z.boolean().default(true),
  inAppPrimaryActionLabel: z.string().default("Join Discord"),
  enablePrimaryAction: z.boolean().default(true),
  inAppPrimaryActionUrl: z.string().default("https://novu.com"),
  inAppSecondaryActionLabel: z.string().default("Dismiss"),
  enableSecondaryAction: z.boolean().default(true),
  inAppSecondaryActionUrl: z.string().default("https://novu.com"),
});

export const smsControlSchema = z.object({
  smsBody: z.string().default("SMS Notification Subject"),
});

export const pushControlSchema = z.object({
  pushSubject: z.string().default("Push Notification Subject"),
  pushBody: z.string().default("Push Notification Body"),
});

export const chatControlSchema = z.object({
  chatBody: z.string().default("Chat Notification Body"),
});

export const delayControlSchema = z.object({
  unit: z.enum(["seconds", "minutes", "hours", "days", "weeks", "months"]).default("days"),
  amount: z.number().default(2),
});

export const digestControlSchema = z.object({
  strategy: z.enum(["Regular", "Scheduled"]).default("Regular"),
  lookBackWindow: z.boolean().default(false),
  digestKey: z.string().default("digestKey"),
  unit: z.enum(["seconds", "minutes", "hours", "days", "weeks", "months"]).default("days"),
  amount: z.number().default(3),
  cron: z.string().default(CronExpression.EVERY_DAY_AT_8AM), // visit https://crontab.guru/ to set the cron expression.
});

export const customControlSchema = z.object({
});
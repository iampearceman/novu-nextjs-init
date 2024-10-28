import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NotificationButton } from "./components/NotificationButton"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { NovuInbox } from "./components/NovuInbox"


import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-1 container mx-auto py-8 flex items-center justify-center">
        <Card className="w-full max-w-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Novu + Next.js Starter</CardTitle>
              <CardDescription>Trigger notifications with a single button</CardDescription>
            </div>
            <NovuInbox />
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger><strong>Create a workflow</strong></AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A workflow acts as the blueprint for the notifications that will be sent. This is where all the different channels, filters, rules and actions are tied together under a single entity.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold">Workflow Components:</h4>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-muted">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-bold leading-none">Name and Identifier</h5>
                            <p className="text-sm text-muted-foreground">Every workflow will have a name and trigger identifier. The workflow trigger identifier is used to uniquely identify each workflow. Two workflows can have same name but always have different trigger identifiers.</p>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-muted">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-bold leading-none">Trigger</h5>
                            <p className="text-sm text-muted-foreground">The <strong>Trigger</strong> refers to an event or action that initiates the workflow. It signifies a call to the Novu API with a specified workflow trigger identifier, along with the necessary payload data that the workflow content will utilize.</p>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-muted">
                            <span className="text-sm font-medium">3</span>
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-bold leading-none">Steps</h5>
                            <p className="text-sm text-muted-foreground">Within the Novu framework, steps are categorized into various types, each of which is linked with at least one corresponding action.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center">
                      <a
                        href="https://docs.novu.co/workflows/introduction?utm_source=Next.js%20Starter&utm_medium=nextjs&utm_campaign=workflows"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more about workflows
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger><strong>Add Inbox to your app</strong></AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The Inbox component enables a rich context-aware in-app notifications center directly in your application, and with minimal effort.
                    </p>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm">
                        <code>
                          {`<Inbox
  applicationIdentifier=""
  subscriberId=""
/>`}
                        </code>
                      </pre>
                    </div>
                    <div className="pt-2 flex items-center">
                      <a
                        href="https://docs.novu.co/inbox/introduction?utm_source=Next.js%20Starter&utm_medium=nextjs&utm_campaign=inbox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more about Inbox
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger><strong>Digest multiple notifications</strong></AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    The digest engine collects multiple trigger events, aggregates them into a single message and delivers it to the subscriber.
                    <br />
                    <br />
                    <strong>Example:</strong> A user receives 100 notifications in a short amount of time, but you only want to notify them once per hour.
                  </p>
                  <div className="pt-2 flex items-center">
                    <a
                        href="https://docs.novu.co/workflows/digest?utm_source=Next.js%20Starter&utm_medium=nextjs&utm_campaign=digest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more about Digest
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger><strong>Schedule / Delay notifications</strong></AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        The <strong>schedule</strong> or <strong>delay</strong> action awaits a specified amount of time before moving on to trigger the following steps of the workflow.
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold">Common Use Cases:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Send a follow-up email 24 hours after user registration</li>
                          <li>• Trigger a reminder notification if user hasn't completed an action</li>
                          <li>• Schedule notifications for specific dates (e.g., subscription renewal)</li>
                          <li>• Allow the user some time to cancel an action that generated a notification</li>
                        </ul>
                      </div>

                      <div className="pt-2 flex items-center">
                        <a
                          href="https://docs.novu.co/workflow/delay?utm_source=Next.js%20Starter&utm_medium=nextjs&utm_campaign=delay"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Learn more about Delay
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator orientation="vertical" className="h-12 hidden sm:block" />
              <div className="flex gap-4 items-center">
                <NotificationButton />
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="border-t bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <Image
                  src="/novu.svg"
                  alt="Novu Logo"
                  width={100}
                  height={28}
                  className="mb-4 dark:invert"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The open-source notification infrastructure for developers
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Documentation</a></li>
                  <li><a href="#" className="text-sm hover:underline">API Reference</a></li>
                  <li><a href="#" className="text-sm hover:underline">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">GitHub</a></li>
                  <li><a href="#" className="text-sm hover:underline">Discord</a></li>
                  <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                  <li><a href="#" className="text-sm hover:underline">Blog</a></li>
                  <li><a href="#" className="text-sm hover:underline">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

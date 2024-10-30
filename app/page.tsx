"use client";

import { useState, useEffect } from "react";
import { NovuInbox } from "./components/NovuInbox";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isNovuConnected, setIsNovuConnected] = useState(false);

  useEffect(() => {
    (async () => {
      await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({
          event: "Starter Page Visit - [Next.js Starter]",
          data: {},
        }),
      });
    })();
  }, []);

  useEffect(() => {
    const checkNovuConnection = async () => {
      try {
        const response = await fetch("/api/dev-studio-status");
        const data = await response.json();
        setIsNovuConnected(data.connected);

        if (!data.connected) {
          console.log("Novu connection failed:", data.error);
        }
      } catch (error) {
        console.error("Novu connection error:", error);
        setIsNovuConnected(false);
      }
    };

    checkNovuConnection();
    const interval = setInterval(checkNovuConnection, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerNotification = async () => {
    try {
      const response = await fetch("/api/trigger", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to trigger notification");
      }

      const data = await response.json();
      console.log("Notification triggered:", data);

      await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({
          event: "Notification Triggered - [Next.js Starter]",
          data: {},
        }),
      });
    } catch (error) {
      console.error("Error triggering notification:", error);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          {/* Header */}
          <div className={styles.header}>
            <div>
              <h1>Novu + Next.js Starter</h1>
              <p>Trigger notifications with a single button</p>
            </div>
            <NovuInbox />
          </div>

          {/* Content */}
          <div className={styles.content}>
            {/* Info Section */}
            <div className={styles.infoSection}>
              <details className={styles.accordion}>
                <summary className={styles.accordionHeader}>
                  Create a workflow
                </summary>
                <div className={styles.accordionContent}>
                  <p className={styles.description}>
                    A workflow acts as the blueprint for the notifications that
                    will be sent. This is where all the different channels,
                    filters, rules and actions are tied together under a single
                    entity.
                  </p>

                  <div className={styles.stepList}>
                    <div className={styles.step}>
                      <div className={styles.stepNumber}>1</div>
                      <div className={styles.stepContent}>
                        <h5 className={styles.stepTitle}>
                          Name and Identifier
                        </h5>
                        <p className={styles.stepDescription}>
                          Every workflow will have a name and trigger
                          identifier. The workflow trigger identifier is used to
                          uniquely identify each workflow.
                        </p>
                      </div>
                    </div>

                    <div className={styles.step}>
                      <div className={styles.stepNumber}>2</div>
                      <div className={styles.stepContent}>
                        <h5 className={styles.stepTitle}>Trigger</h5>
                        <p className={styles.stepDescription}>
                          The Trigger refers to an event or action that
                          initiates the workflow. It signifies a call to the
                          Novu API with a specified workflow trigger identifier.
                        </p>
                      </div>
                    </div>

                    <div className={styles.step}>
                      <div className={styles.stepNumber}>3</div>
                      <div className={styles.stepContent}>
                        <h5 className={styles.stepTitle}>Steps</h5>
                        <p className={styles.stepDescription}>
                          Within the Novu framework, steps are categorized into
                          various types, each of which is linked with at least
                          one corresponding action.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://docs.novu.co/workflows/introduction/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                    className={styles.link}
                  >
                    Learn more about workflows
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </a>
                </div>
              </details>

              <details className={styles.accordion}>
                <summary className={styles.accordionHeader}>
                  Add Inbox to your app
                </summary>
                <div className={styles.accordionContent}>
                  <p className={styles.description}>
                    The Inbox component enables a rich context-aware in-app
                    notifications center directly in your application, and with
                    minimal effort.
                  </p>
                  <pre className={styles.codeBlock}>
                    <code>{`<Inbox />`}</code>
                  </pre>
                  <a
                    href="https://docs.novu.co/inbox/introduction/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                    className={styles.link}
                  >
                    Learn more about Inbox
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </a>
                </div>
              </details>

              <details className={styles.accordion}>
                <summary className={styles.accordionHeader}>
                  Digest multiple notifications
                </summary>
                <div className={styles.accordionContent}>
                  <p className={styles.description}>
                    The digest engine collects multiple trigger events,
                    aggregates them into a single message and delivers it to the
                    subscriber.
                  </p>
                  <div className={styles.codeBlock}>
                    <strong>Example:</strong>
                    <p>
                      A user receives 100 notifications in a short amount of
                      time, but you only want to notify them once per hour.
                    </p>
                  </div>
                  <a
                    href="https://docs.novu.co/workflows/digest/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                    className={styles.link}
                  >
                    Learn more about Digest
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </a>
                </div>
              </details>

              <details className={styles.accordion}>
                <summary className={styles.accordionHeader}>
                  Schedule / Delay notifications
                </summary>
                <div className={styles.accordionContent}>
                  <p className={styles.description}>
                    The <strong>schedule</strong> or <strong>delay</strong>{" "}
                    action awaits a specified amount of time before moving on to
                    trigger the following steps of the workflow.
                  </p>

                  <h4 className={styles.stepTitle}>Common Use Cases:</h4>
                  <ul className={styles.bulletList}>
                    <li className={styles.bulletItem}>
                      <div className={styles.bullet}></div>- Send a follow-up
                      email 24 hours after user registration
                    </li>
                    <li className={styles.bulletItem}>
                      <div className={styles.bullet}></div>- Trigger a reminder
                      notification if user hasn't completed an action
                    </li>
                    <li className={styles.bulletItem}>
                      <div className={styles.bullet}></div>- Schedule
                      notifications for specific dates
                    </li>
                    <li className={styles.bulletItem}>
                      <div className={styles.bullet}></div>- Allow the user some
                      time to cancel an action
                    </li>
                  </ul>

                  <a
                    href="https://docs.novu.co/workflow/delay/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                    className={styles.link}
                  >
                    Learn more about Delay
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </a>
                </div>
              </details>
            </div>

            <div className={styles.divider} />

            <div className={styles.buttonSection}>
              {isNovuConnected ? (
                <button className={styles.button} onClick={triggerNotification}>
                  Trigger a notification
                </button>
              ) : (
                <div className={styles.connectionMessage}>
                  <div className={styles.connectionContent}></div>
                  <div className={styles.connectionText}>
                    <h4>Connection Required</h4>
                    <br />
                    <p>Run the following command to start:</p>
                    <code className={styles.commandCode}>
                      npx novu@latest dev --port 4000
                    </code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src="./novu.svg" alt="Novu Logo" width={120} height={60} />
            <p>The open-source notification infrastructure for developers.</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Resources</h3>
            <ul>
              <li>
                <a
                  href="https://docs.novu.co/getting-started/introduction/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                  target="_blank"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.novu.co/api-reference/overview/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                  target="_blank"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://novu.co/blog/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="https://github.com/novuhq/novu" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.novu.co" target="_blank">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://twitter.com/novuhq" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Company</h3>
            <ul>
              <li>
                <a
                  href="https://novu.co/contact-us/?utm_campaign=nextjs-starter&utm_source=nextjs-starter&utm_medium=nextjs"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { workflow } from "@novu/framework";
import { payloadSchema } from './payloadSchema';
import { emailControlSchema } from './stepsControlSchema';

// Define the name for your workflow 
const workflowName = 'InAppEmailDemo';

// Define the workflow
export const inboxEmailDemo = workflow(
    workflowName,
    async ({ step, payload }) => {
        // Define the step for the workflow
        // -----------------------------------in-app step-------------------------------------------------------------------------
        await step.inApp(
            'In App Step',
            async () => {
                return {
                    subject: payload.inAppSubject,
                    body: payload.inAppBody,
                    avatar: payload.inAppAvatar,
                };
            },
        ),
        // -----------------------------------email step-------------------------------------------------------------------------
        await step.email(
            'Email Step',
                async (controls) => {
                    return {
                        subject: controls.subject,
                        body: controls.body
                    };
                },
                {
                    controlSchema: emailControlSchema
                }
            )
    },
    {
        payloadSchema: payloadSchema
    }
);

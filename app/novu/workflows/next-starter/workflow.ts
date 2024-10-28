import { workflow } from "@novu/framework";
import { payloadSchema } from './payloadSchema';

// Define the name for your workflow 
const workflowName = 'NextJsStarter';

// Define the workflow
export const nextStarter = workflow(
    workflowName,
    async ({ step, payload }) => {
        // Define the step for the workflow
        // -----------------------------------in-app step-------------------------------------------------------------------------
        await step.inApp(
            'In-App Step',
            async () => {
                return {
                    subject: payload.inAppSubject,
                    body: payload.inAppBody,
                    avatar: payload.inAppAvatar,
                };
            },
        )
    },
    {
        payloadSchema: payloadSchema
    }
);

## Workflow Name

    Next.js Starter

## Description

This workflow demonstrates how to use Novu with Next.js. It includes an in-app notification step that sends a welcome message to the user and an email notification step that sends a welcome message to the user.

## Workflow Steps

0. Event step: This step triggers the workflow.
1. In-app step: This step sends a welcome message to the user.
2. Email step: This step sends a welcome message to the user.
## Configured Channels

    - In-app
    - Email
## Payload Schema

The payload schema defines the data that is passed to the workflow. It is used to validate the data that is passed to the workflow and to provide default values for the data.

### In-app payload schema
- inAppSubject: The subject of the notification.
- inAppBody: The body of the notification.
- inAppAvatar: The avatar of the notification.

### Email payload schema
- emailSubject: The subject of the notification.
- emailBody: The body of the notification.

## Steps Control Schema (Not used in this workflow)

The steps control schema defines the UI for the step. It is used to provide a UI for the step.

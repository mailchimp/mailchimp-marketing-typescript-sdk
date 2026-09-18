//  This file was auto-generated from our API Definition.

/** The current status of the Automation. */
export const AutomationWorkflowStatus = {
    Save: "save",
    Paused: "paused",
    Sending: "sending",
} as const;
export type AutomationWorkflowStatus = (typeof AutomationWorkflowStatus)[keyof typeof AutomationWorkflowStatus];

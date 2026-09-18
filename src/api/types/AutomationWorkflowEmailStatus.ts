//  This file was auto-generated from our API Definition.

/** The current status of the campaign. */
export const AutomationWorkflowEmailStatus = {
    Save: "save",
    Paused: "paused",
    Sending: "sending",
} as const;
export type AutomationWorkflowEmailStatus =
    (typeof AutomationWorkflowEmailStatus)[keyof typeof AutomationWorkflowEmailStatus];

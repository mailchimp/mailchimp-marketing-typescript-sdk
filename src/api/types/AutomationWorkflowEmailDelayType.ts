//  This file was auto-generated from our API Definition.

/** The type of delay for an Automation email. */
export const AutomationWorkflowEmailDelayType = {
    Now: "now",
    Day: "day",
    Hour: "hour",
    Week: "week",
} as const;
export type AutomationWorkflowEmailDelayType =
    (typeof AutomationWorkflowEmailDelayType)[keyof typeof AutomationWorkflowEmailDelayType];

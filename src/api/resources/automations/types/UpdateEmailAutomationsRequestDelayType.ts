//  This file was auto-generated from our API Definition.

/** The type of delay for an automation email. */
export const UpdateEmailAutomationsRequestDelayType = {
    Now: "now",
    Day: "day",
    Hour: "hour",
    Week: "week",
} as const;
export type UpdateEmailAutomationsRequestDelayType =
    (typeof UpdateEmailAutomationsRequestDelayType)[keyof typeof UpdateEmailAutomationsRequestDelayType];

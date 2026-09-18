//  This file was auto-generated from our API Definition.

/** The type of Automation workflow. */
export const CreateAutomationsRequestTriggerSettingsWorkflowType = {
    AbandonedBrowse: "abandonedBrowse",
    AbandonedCart: "abandonedCart",
    EmailFollowup: "emailFollowup",
    SingleWelcome: "singleWelcome",
} as const;
export type CreateAutomationsRequestTriggerSettingsWorkflowType =
    (typeof CreateAutomationsRequestTriggerSettingsWorkflowType)[keyof typeof CreateAutomationsRequestTriggerSettingsWorkflowType];

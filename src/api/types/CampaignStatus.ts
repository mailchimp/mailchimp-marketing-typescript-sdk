//  This file was auto-generated from our API Definition.

/** The current status of the campaign. */
export const CampaignStatus = {
    Save: "save",
    Paused: "paused",
    Schedule: "schedule",
    Sending: "sending",
    Sent: "sent",
    Canceled: "canceled",
    Canceling: "canceling",
    Archived: "archived",
} as const;
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

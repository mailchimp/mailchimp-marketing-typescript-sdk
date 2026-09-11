//  This file was auto-generated from our API Definition.

export const ListCampaignsRequestStatus = {
    Save: "save",
    Paused: "paused",
    Schedule: "schedule",
    Sending: "sending",
    Sent: "sent",
} as const;
export type ListCampaignsRequestStatus = (typeof ListCampaignsRequestStatus)[keyof typeof ListCampaignsRequestStatus];

//  This file was auto-generated from our API Definition.

/** The current state of a campaign delivery. */
export const CampaignsDeliveryStatusStatus = {
    Delivering: "delivering",
    Delivered: "delivered",
    Canceling: "canceling",
    Canceled: "canceled",
} as const;
export type CampaignsDeliveryStatusStatus =
    (typeof CampaignsDeliveryStatusStatus)[keyof typeof CampaignsDeliveryStatusStatus];

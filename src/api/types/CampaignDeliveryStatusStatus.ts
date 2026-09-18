//  This file was auto-generated from our API Definition.

/** The current state of a campaign delivery. */
export const CampaignDeliveryStatusStatus = {
    Delivering: "delivering",
    Delivered: "delivered",
    Canceling: "canceling",
    Canceled: "canceled",
} as const;
export type CampaignDeliveryStatusStatus =
    (typeof CampaignDeliveryStatusStatus)[keyof typeof CampaignDeliveryStatusStatus];

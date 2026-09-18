//  This file was auto-generated from our API Definition.

/** The source of the feedback. */
export const CampaignFeedbackSource = {
    Api: "api",
    Email: "email",
    Sms: "sms",
    Web: "web",
    Ios: "ios",
    Android: "android",
} as const;
export type CampaignFeedbackSource = (typeof CampaignFeedbackSource)[keyof typeof CampaignFeedbackSource];

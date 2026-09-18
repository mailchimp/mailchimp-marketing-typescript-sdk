//  This file was auto-generated from our API Definition.

/** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
export const CampaignType = {
    Regular: "regular",
    Plaintext: "plaintext",
    Absplit: "absplit",
    Rss: "rss",
    Variate: "variate",
} as const;
export type CampaignType = (typeof CampaignType)[keyof typeof CampaignType];

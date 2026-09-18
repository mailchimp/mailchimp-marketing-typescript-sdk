//  This file was auto-generated from our API Definition.

/** The contact's SMS marketing consent status. Use `confirmed` for double opt-in audiences, `consented` for single opt-in audiences. */
export const CreateAudienceContactRequestSmsChannelMarketingConsentStatus = {
    Consented: "consented",
    Confirmed: "confirmed",
    Unknown: "unknown",
} as const;
export type CreateAudienceContactRequestSmsChannelMarketingConsentStatus =
    (typeof CreateAudienceContactRequestSmsChannelMarketingConsentStatus)[keyof typeof CreateAudienceContactRequestSmsChannelMarketingConsentStatus];

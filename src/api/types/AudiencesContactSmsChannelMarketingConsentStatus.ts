//  This file was auto-generated from our API Definition.

/** The contact's SMS marketing consent status. Use `confirmed` for double opt-in audiences, `consented` for single opt-in audiences. `denied` is accepted on PATCH/PUT only (not POST) and drives an API-initiated unsubscribe; it cannot be used when creating a new contact. */
export const AudiencesContactSmsChannelMarketingConsentStatus = {
    Consented: "consented",
    Confirmed: "confirmed",
    Denied: "denied",
    Unknown: "unknown",
} as const;
export type AudiencesContactSmsChannelMarketingConsentStatus =
    (typeof AudiencesContactSmsChannelMarketingConsentStatus)[keyof typeof AudiencesContactSmsChannelMarketingConsentStatus];

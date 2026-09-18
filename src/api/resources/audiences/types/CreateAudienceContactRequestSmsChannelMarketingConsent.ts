//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A contact's current consent status for SMS marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values.
 */
export interface CreateAudienceContactRequestSmsChannelMarketingConsent {
    /** The source from which the parent's entity was created. */
    source?: Mailchimp.CreateAudienceContactRequestSmsChannelMarketingConsentSource;
    /** The contact's SMS marketing consent status. Use `confirmed` for double opt-in audiences, `consented` for single opt-in audiences. */
    status?: Mailchimp.CreateAudienceContactRequestSmsChannelMarketingConsentStatus;
    /** The timestamp when SMS marketing consent was captured (ISO 8601). Only accepted and returned when status is `confirmed`. The timestamp of the consent state change being recorded. Defaults to the current time if not provided. If the contact already has a consent timestamp on record that is equal to or newer than the supplied value, the supplied value is ignored (staleness guard); to update the consent timestamp supply a value strictly newer than the stored one. */
    capturedAt?: Date;
}

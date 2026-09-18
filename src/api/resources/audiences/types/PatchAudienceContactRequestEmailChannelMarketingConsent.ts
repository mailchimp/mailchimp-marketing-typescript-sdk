//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A contact's current consent status for email marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values.
 */
export interface PatchAudienceContactRequestEmailChannelMarketingConsent {
    /** The source from which the parent's entity was created. */
    source?: Mailchimp.PatchAudienceContactRequestEmailChannelMarketingConsentSource;
    status?: Mailchimp.PatchAudienceContactRequestEmailChannelMarketingConsentStatus;
    /** The ISO 8601 timestamp when the email marketing consent state was recorded; accepted and returned only when status is `confirmed` or `consented`; defaults to the current time if omitted; ignored if older than an existing stored timestamp (staleness guard). */
    capturedAt?: Date;
}

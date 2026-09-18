//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A contact's current consent status for email marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values.
 */
export interface CreateAudienceContactRequestEmailChannelMarketingConsent {
    /** Status of a contacts Marketing Consent */
    status?: Mailchimp.CreateAudienceContactRequestEmailChannelMarketingConsentStatus;
}

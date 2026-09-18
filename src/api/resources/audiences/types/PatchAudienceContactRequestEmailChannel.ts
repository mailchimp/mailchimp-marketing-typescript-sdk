//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface PatchAudienceContactRequestEmailChannel {
    /** Email address */
    email?: string;
    /** A contact's current consent status for email marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values. */
    marketingConsent?: Mailchimp.PatchAudienceContactRequestEmailChannelMarketingConsent;
}

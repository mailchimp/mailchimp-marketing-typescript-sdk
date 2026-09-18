//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface PatchAudienceContactRequestSmsChannel {
    /** A contact's current consent status for SMS marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values. */
    marketingConsent?: Mailchimp.PatchAudienceContactRequestSmsChannelMarketingConsent;
    /** SMS Phone Number */
    smsPhone?: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface AudiencesContactSmsChannel {
    /** A computation performed by the Mailchimp platform, triggered whenever any of its inputs change. Some inputs are controlled by API users, while others are tracked internally by the platform. Computation is based on: audience opt-in configuration (single vs. double opt-in), marketing consent status, and deliverability status (an internal state for a contact, maintained by Mailchimp for a specific marketing channel instance). This new API field is distinct from how contacts are displayed in the UI. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values. */
    effectiveSubscriptionStatus?: Mailchimp.AudiencesContactSmsChannelEffectiveSubscriptionStatus;
    /** A contact's current consent status for SMS marketing communications. See the [Audiences (BETA) documentation](https://mailchimp.com/developer/marketing/docs/audiences-introduction) to learn about supported values. */
    marketingConsent?: Mailchimp.AudiencesContactSmsChannelMarketingConsent;
    /** SMS Phone Number */
    smsPhone?: string;
    /** The source from which the parent's entity was created. */
    source?: Mailchimp.AudiencesContactSmsChannelSource;
    /** SHA256 hash of the SMS phone number */
    hashedSmsPhone?: string;
}

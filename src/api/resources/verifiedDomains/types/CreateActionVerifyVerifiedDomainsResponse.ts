//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The verified domains currently on the account.
 */
export interface CreateActionVerifyVerifiedDomainsResponse {
    /** Whether domain authentication is enabled for this domain. */
    authenticated?: boolean;
    /** The name of this domain. */
    domain?: string;
    /** Returns whether the domain used is a public / free email provider. See [Limitations of Free Email Addresses](https://mailchimp.com/help/limitations-of-free-email-addresses/) for more details. */
    isFreeEmailProvider?: boolean;
    /** The Domain's current status. */
    status?: Mailchimp.CreateActionVerifyVerifiedDomainsResponseStatus;
    /** The e-mail address receiving the two-factor challenge for this domain. */
    verificationEmail?: string;
    /** The date/time that the two-factor challenge was sent to the verification email. */
    verificationSent?: Date;
    /** Whether the domain has been verified for sending. */
    verified?: boolean;
}

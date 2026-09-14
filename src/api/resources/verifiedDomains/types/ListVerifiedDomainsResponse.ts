//  This file was auto-generated from our API Definition.

/**
 * The verified domains currently on the account.
 */
export interface ListVerifiedDomainsResponse {
    /** The domains on the account */
    domains?: ListVerifiedDomainsResponse.Domains.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListVerifiedDomainsResponse {
    export type Domains = Domains.Item[];

    export namespace Domains {
        /**
         * The verified domains currently on the account.
         */
        export interface Item {
            /** Whether domain authentication is enabled for this domain. */
            authenticated?: boolean | undefined;
            /** The name of this domain. */
            domain?: string | undefined;
            /** Returns whether the domain used is a public / free email provider. See [Limitations of Free Email Addresses](https://mailchimp.com/help/limitations-of-free-email-addresses/) for more details. */
            is_free_email_provider?: boolean | undefined;
            /** The Domain's current status. */
            status?: Item.Status | undefined;
            /** The e-mail address receiving the two-factor challenge for this domain. */
            verification_email?: string | undefined;
            /** The date/time that the two-factor challenge was sent to the verification email. */
            verification_sent?: string | undefined;
            /** Whether the domain has been verified for sending. */
            verified?: boolean | undefined;
        }

        export namespace Item {
            /** The Domain's current status. */
            export const Status = {
                VerificationInProgress: "VERIFICATION_IN_PROGRESS",
                Verified: "VERIFIED",
                Expired: "EXPIRED",
                Error: "ERROR",
                AuthenticationInProgress: "AUTHENTICATION_IN_PROGRESS",
                AuthenticationError: "AUTHENTICATION_ERROR",
                Authenticated: "AUTHENTICATED",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
        }
    }
}

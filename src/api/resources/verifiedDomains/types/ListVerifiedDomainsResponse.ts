//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The verified domains currently on the account.
 */
export interface ListVerifiedDomainsResponse {
    /** The domains on the account */
    domains?: Mailchimp.ListVerifiedDomainsResponseDomainsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

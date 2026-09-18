//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of stores in the account.
 */
export interface ListStoresEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoresEcommerceResponseLinksItem[];
    /** An array of objects, each representing a store. */
    stores?: Mailchimp.ECommerceStore[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

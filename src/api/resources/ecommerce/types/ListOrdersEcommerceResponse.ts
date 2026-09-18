//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of orders in an account.
 */
export interface ListOrdersEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListOrdersEcommerceResponseLinksItem[];
    /** An array of objects, each representing an order resource. */
    orders?: Mailchimp.ECommerceOrder[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

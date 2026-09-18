//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of orders in a store.
 */
export interface ListStoreOrdersEcommerceResponse {
    /** The store id. */
    storeId?: string;
    /** An array of objects, each representing an order in a store. */
    orders?: Mailchimp.ECommerceOrder[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreOrdersEcommerceResponseLinksItem[];
}

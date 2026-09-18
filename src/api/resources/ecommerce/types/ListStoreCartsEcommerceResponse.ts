//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of a store's carts.
 */
export interface ListStoreCartsEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreCartsEcommerceResponseLinksItem[];
    /** An array of objects, each representing a cart. */
    carts?: Mailchimp.ECommerceCart[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

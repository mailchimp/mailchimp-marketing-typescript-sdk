//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of a cart's line items.
 */
export interface ListStoreCartLinesEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreCartLinesEcommerceResponseLinksItem[];
    /** The cart id. */
    cartId?: string;
    /** An array of objects, each representing a cart's line item. */
    lines?: Mailchimp.ECommerceCartLineItem[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

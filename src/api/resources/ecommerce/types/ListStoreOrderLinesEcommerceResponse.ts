//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of an order's line items.
 */
export interface ListStoreOrderLinesEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreOrderLinesEcommerceResponseLinksItem[];
    /** An array of objects, each representing an order's line item. */
    lines?: Mailchimp.ECommerceOrderLineItem[];
    /** The order id. */
    orderId?: string;
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

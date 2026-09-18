//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of the store's customers.
 */
export interface ListStoreCustomersEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreCustomersEcommerceResponseLinksItem[];
    /** An array of objects, each representing a customer of a store. */
    customers?: Mailchimp.ECommerceCustomer[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

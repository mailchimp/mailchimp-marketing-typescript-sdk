//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of a store's products.
 */
export interface ListStoreProductsEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreProductsEcommerceResponseLinksItem[];
    /** An array of objects, each representing a store product. */
    products?: Mailchimp.ECommerceProduct[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

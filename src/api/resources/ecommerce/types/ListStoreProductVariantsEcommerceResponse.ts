//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of a product's variants.
 */
export interface ListStoreProductVariantsEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStoreProductVariantsEcommerceResponseLinksItem[];
    /** The product id. */
    productId?: string;
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** An array of objects, each representing a product's variants. */
    variants?: Mailchimp.ECommerceProductVariant[];
}

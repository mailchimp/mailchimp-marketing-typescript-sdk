//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Information about a specific product image.
 */
export interface GetStoreProductImageEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GetStoreProductImageEcommerceResponseLinksItem[];
    /** A unique identifier for the product image. */
    id?: string;
    /** The URL for a product image. */
    url?: string;
    /** The list of product variants using the image. */
    variantIds?: string[];
}

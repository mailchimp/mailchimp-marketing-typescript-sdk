//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         productId: "product_id",
 *         imageId: "image_id"
 *     }
 */
export interface UpdateStoreProductImageEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the product of a store. */
    productId: string;
    /** The id for the product image. */
    imageId: string;
    /** A unique identifier for the product image. */
    id?: string;
    /** The URL for a product image. */
    url?: string;
    /** The list of product variants using the image. */
    variantIds?: Mailchimp.UpdateStoreProductImageEcommerceRequestVariantIdsItem[];
}

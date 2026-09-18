//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         productId: "product_id",
 *         id: "id",
 *         title: "Cat Hat"
 *     }
 */
export interface CreateStoreProductVariantEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the product of a store. */
    productId: string;
    /** The backorders of a product variant. */
    backorders?: string;
    /** A unique identifier for the product variant. */
    id: Mailchimp.CreateStoreProductVariantEcommerceRequestId;
    /** The image URL for a product variant. */
    imageUrl?: string;
    /** The inventory quantity of a product variant. */
    inventoryQuantity?: number;
    price?: Mailchimp.CreateStoreProductVariantEcommerceRequestPrice;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string;
    /** The title of a product variant. */
    title: string;
    /** The URL for a product variant. */
    url?: string;
    /** The visibility of a product variant. */
    visibility?: string;
}

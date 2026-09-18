//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         cartId: "cart_id",
 *         id: "id",
 *         price: 1.1,
 *         productId: "product_id",
 *         productVariantId: "product_variant_id",
 *         quantity: 1
 *     }
 */
export interface CreateStoreCartLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the cart. */
    cartId: string;
    /** A unique identifier for the cart line item. */
    id: string;
    price: Mailchimp.CreateStoreCartLineEcommerceRequestPrice;
    /** A unique identifier for the product associated with the cart line item. */
    productId: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    productVariantId: string;
    /** The quantity of a cart line item. */
    quantity: number;
}

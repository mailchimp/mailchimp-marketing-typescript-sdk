//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         cartId: "cart_id",
 *         lineId: "line_id"
 *     }
 */
export interface UpdateStoreCartLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the cart. */
    cartId: string;
    /** The id for the line item of a cart. */
    lineId: string;
    price?: Mailchimp.UpdateStoreCartLineEcommerceRequestPrice;
    /** A unique identifier for the product associated with the cart line item. */
    productId?: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    productVariantId?: string;
    /** The quantity of a cart line item. */
    quantity?: number;
}

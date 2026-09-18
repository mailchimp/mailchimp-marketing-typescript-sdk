//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Information about a specific cart line item.
 */
export interface CreateStoreCartEcommerceRequestLinesItem {
    /** A unique identifier for the cart line item. */
    id: string;
    price: Mailchimp.CreateStoreCartEcommerceRequestLinesItemPrice;
    /** A unique identifier for the product associated with the cart line item. */
    productId: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    productVariantId: string;
    /** The quantity of a cart line item. */
    quantity: number;
}

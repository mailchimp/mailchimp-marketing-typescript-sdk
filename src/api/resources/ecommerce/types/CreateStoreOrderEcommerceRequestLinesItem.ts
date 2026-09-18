//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Information about a specific order line.
 */
export interface CreateStoreOrderEcommerceRequestLinesItem {
    discount?: Mailchimp.CreateStoreOrderEcommerceRequestLinesItemDiscount;
    /** A unique identifier for the order line item. */
    id: string;
    price: Mailchimp.CreateStoreOrderEcommerceRequestLinesItemPrice;
    product?: Mailchimp.EcommerceStoresOrdersPost;
    /** A unique identifier for the product associated with the order line item. */
    productId: string;
    /** A unique identifier for the product variant associated with the order line item. */
    productVariantId: string;
    /** The quantity of an order line item. */
    quantity: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         orderId: "order_id",
 *         id: "id",
 *         price: 1.1,
 *         productId: "product_id",
 *         productVariantId: "product_variant_id",
 *         quantity: 1
 *     }
 */
export interface CreateStoreOrderLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the order in a store. */
    orderId: string;
    discount?: Mailchimp.CreateStoreOrderLineEcommerceRequestDiscount;
    /** A unique identifier for the order line item. */
    id: string;
    price: Mailchimp.CreateStoreOrderLineEcommerceRequestPrice;
    product?: Mailchimp.EcommerceStoresOrdersPost;
    /** A unique identifier for the product associated with the order line item. */
    productId: string;
    /** A unique identifier for the product variant associated with the order line item. */
    productVariantId: string;
    /** The quantity of an order line item. */
    quantity: number;
}

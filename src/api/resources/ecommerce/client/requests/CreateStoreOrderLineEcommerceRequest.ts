//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         order_id: "order_id",
 *         id: "id",
 *         price: 1.1,
 *         product_id: "product_id",
 *         product_variant_id: "product_variant_id",
 *         quantity: 1
 *     }
 */
export interface CreateStoreOrderLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the order in a store. */
    order_id: string;
    discount?: CreateStoreOrderLineEcommerceRequest.Discount;
    /** A unique identifier for the order line item. */
    id: string;
    price: CreateStoreOrderLineEcommerceRequest.Price;
    product?: Mailchimp.EcommerceStoresOrdersPost;
    /** A unique identifier for the product associated with the order line item. */
    product_id: string;
    /** A unique identifier for the product variant associated with the order line item. */
    product_variant_id: string;
    /** The quantity of an order line item. */
    quantity: number;
}

export namespace CreateStoreOrderLineEcommerceRequest {
    export type Discount = number | string;
    export type Price = number | string;
}

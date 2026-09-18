//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         orderId: "order_id",
 *         lineId: "line_id"
 *     }
 */
export interface UpdateStoreOrderLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the order in a store. */
    orderId: string;
    /** The id for the line item of an order. */
    lineId: string;
    discount?: Mailchimp.UpdateStoreOrderLineEcommerceRequestDiscount;
    /** A unique identifier for the order line item. */
    id?: string;
    price?: Mailchimp.UpdateStoreOrderLineEcommerceRequestPrice;
    /** A unique identifier for the product associated with the order line item. */
    productId?: string;
    /** A unique identifier for the product variant associated with the order line item. */
    productVariantId?: string;
    /** The quantity of an order line item. */
    quantity?: number;
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         orderId: "order_id",
 *         lineId: "line_id"
 *     }
 */
export interface GetStoreOrderLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the order in a store. */
    orderId: string;
    /** The id for the line item of an order. */
    lineId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         order_id: "order_id",
 *         line_id: "line_id"
 *     }
 */
export interface GetStoreOrderLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the order in a store. */
    order_id: string;
    /** The id for the line item of an order. */
    line_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

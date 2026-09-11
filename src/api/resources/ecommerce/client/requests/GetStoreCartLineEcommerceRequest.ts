//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         cart_id: "cart_id",
 *         line_id: "line_id"
 *     }
 */
export interface GetStoreCartLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the cart. */
    cart_id: string;
    /** The id for the line item of a cart. */
    line_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         cartId: "cart_id",
 *         lineId: "line_id"
 *     }
 */
export interface GetStoreCartLineEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the cart. */
    cartId: string;
    /** The id for the line item of a cart. */
    lineId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

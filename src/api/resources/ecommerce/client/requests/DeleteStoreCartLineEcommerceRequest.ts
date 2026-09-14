//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         cart_id: "cart_id",
 *         line_id: "line_id"
 *     }
 */
export interface DeleteStoreCartLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the cart. */
    cart_id: string;
    /** The id for the line item of a cart. */
    line_id: string;
}

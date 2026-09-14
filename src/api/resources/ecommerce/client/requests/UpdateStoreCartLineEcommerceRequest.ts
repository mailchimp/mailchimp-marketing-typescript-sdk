//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         cart_id: "cart_id",
 *         line_id: "line_id"
 *     }
 */
export interface UpdateStoreCartLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the cart. */
    cart_id: string;
    /** The id for the line item of a cart. */
    line_id: string;
    price?: UpdateStoreCartLineEcommerceRequest.Price;
    /** A unique identifier for the product associated with the cart line item. */
    product_id?: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    product_variant_id?: string;
    /** The quantity of a cart line item. */
    quantity?: number;
}

export namespace UpdateStoreCartLineEcommerceRequest {
    export type Price = number | string;
}

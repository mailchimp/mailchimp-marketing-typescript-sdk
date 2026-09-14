//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         cart_id: "cart_id",
 *         id: "id",
 *         price: 1.1,
 *         product_id: "product_id",
 *         product_variant_id: "product_variant_id",
 *         quantity: 1
 *     }
 */
export interface CreateStoreCartLineEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the cart. */
    cart_id: string;
    /** A unique identifier for the cart line item. */
    id: string;
    price: CreateStoreCartLineEcommerceRequest.Price;
    /** A unique identifier for the product associated with the cart line item. */
    product_id: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    product_variant_id: string;
    /** The quantity of a cart line item. */
    quantity: number;
}

export namespace CreateStoreCartLineEcommerceRequest {
    export type Price = number | string;
}

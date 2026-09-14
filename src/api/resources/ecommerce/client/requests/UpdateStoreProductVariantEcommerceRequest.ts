//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         product_id: "product_id",
 *         variant_id: "variant_id"
 *     }
 */
export interface UpdateStoreProductVariantEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the product of a store. */
    product_id: string;
    /** The id for the product variant. */
    variant_id: string;
    /** The backorders of a product variant. */
    backorders?: string;
    /** The image URL for a product variant. */
    image_url?: string;
    /** The inventory quantity of a product variant. */
    inventory_quantity?: number;
    price?: UpdateStoreProductVariantEcommerceRequest.Price;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string;
    /** The title of a product variant. */
    title?: string;
    /** The URL for a product variant. */
    url?: string;
    /** The visibility of a product variant. */
    visibility?: string;
}

export namespace UpdateStoreProductVariantEcommerceRequest {
    export type Price = number | string;
}

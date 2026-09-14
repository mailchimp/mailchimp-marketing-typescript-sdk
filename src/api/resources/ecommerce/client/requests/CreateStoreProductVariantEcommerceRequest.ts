//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         product_id: "product_id",
 *         id: "id",
 *         title: "Cat Hat"
 *     }
 */
export interface CreateStoreProductVariantEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the product of a store. */
    product_id: string;
    /** The backorders of a product variant. */
    backorders?: string;
    /** A unique identifier for the product variant. */
    id: CreateStoreProductVariantEcommerceRequest.Id;
    /** The image URL for a product variant. */
    image_url?: string;
    /** The inventory quantity of a product variant. */
    inventory_quantity?: number;
    price?: CreateStoreProductVariantEcommerceRequest.Price;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string;
    /** The title of a product variant. */
    title: string;
    /** The URL for a product variant. */
    url?: string;
    /** The visibility of a product variant. */
    visibility?: string;
}

export namespace CreateStoreProductVariantEcommerceRequest {
    /**
     * A unique identifier for the product variant.
     */
    export type Id = string | number;
    export type Price = number | string;
}

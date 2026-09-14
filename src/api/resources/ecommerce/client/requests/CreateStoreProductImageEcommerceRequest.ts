//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         product_id: "product_id",
 *         id: "id",
 *         url: "url"
 *     }
 */
export interface CreateStoreProductImageEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the product of a store. */
    product_id: string;
    /** A unique identifier for the product image. */
    id: string;
    /** The URL for a product image. */
    url: string;
    /** The list of product variants using the image. */
    variant_ids?: CreateStoreProductImageEcommerceRequest.VariantIds.Item[];
}

export namespace CreateStoreProductImageEcommerceRequest {
    export type VariantIds = VariantIds.Item[];

    export namespace VariantIds {
        export type Item = string | number;
    }
}

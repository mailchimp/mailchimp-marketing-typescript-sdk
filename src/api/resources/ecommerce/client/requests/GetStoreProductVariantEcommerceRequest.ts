//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         productId: "product_id",
 *         variantId: "variant_id"
 *     }
 */
export interface GetStoreProductVariantEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the product of a store. */
    productId: string;
    /** The id for the product variant. */
    variantId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

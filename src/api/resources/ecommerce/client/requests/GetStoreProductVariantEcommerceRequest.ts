//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         product_id: "product_id",
 *         variant_id: "variant_id"
 *     }
 */
export interface GetStoreProductVariantEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the product of a store. */
    product_id: string;
    /** The id for the product variant. */
    variant_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

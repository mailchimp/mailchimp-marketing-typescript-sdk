//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id"
 *     }
 */
export interface GetStoreEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

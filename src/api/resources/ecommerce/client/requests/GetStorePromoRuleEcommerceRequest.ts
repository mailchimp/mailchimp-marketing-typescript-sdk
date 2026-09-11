//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         promo_rule_id: "promo_rule_id"
 *     }
 */
export interface GetStorePromoRuleEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the promo rule of a store. */
    promo_rule_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

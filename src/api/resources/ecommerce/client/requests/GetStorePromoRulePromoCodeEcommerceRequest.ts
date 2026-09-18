//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         promoRuleId: "promo_rule_id",
 *         promoCodeId: "promo_code_id"
 *     }
 */
export interface GetStorePromoRulePromoCodeEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the promo rule of a store. */
    promoRuleId: string;
    /** The id for the promo code of a store. */
    promoCodeId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

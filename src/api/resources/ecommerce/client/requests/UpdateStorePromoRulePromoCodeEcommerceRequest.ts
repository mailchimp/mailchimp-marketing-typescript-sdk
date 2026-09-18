//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         promoRuleId: "promo_rule_id",
 *         promoCodeId: "promo_code_id"
 *     }
 */
export interface UpdateStorePromoRulePromoCodeEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the promo rule of a store. */
    promoRuleId: string;
    /** The id for the promo code of a store. */
    promoCodeId: string;
    /** The discount code. Restricted to UTF-8 characters with max length 50. */
    code?: string;
    /** The date and time the promotion was created in ISO 8601 format. */
    createdAtForeign?: string;
    /** Whether the promo code is currently enabled. */
    enabled?: boolean;
    /** A unique identifier for the promo code. Restricted to UTF-8 characters with max length 50. */
    id?: string;
    /** The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000. */
    redemptionUrl?: string;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updatedAtForeign?: string;
    /** Number of times promo code has been used. */
    usageCount?: number;
}

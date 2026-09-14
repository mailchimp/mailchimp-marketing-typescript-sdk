//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         amount: 1.1,
 *         description: "Save BIG during our summer sale!",
 *         id: "id",
 *         target: "per_item",
 *         type: "fixed"
 *     }
 */
export interface CreateStorePromoRuleEcommerceRequest {
    /** The store id. */
    store_id: string;
    amount: CreateStorePromoRuleEcommerceRequest.Amount;
    /** The date and time the promotion was created in ISO 8601 format. */
    created_at_foreign?: string;
    /** The description of a promotion restricted to UTF-8 characters with max length 255. */
    description: string;
    /** Whether the promo rule is currently enabled. */
    enabled?: boolean;
    ends_at?: CreateStorePromoRuleEcommerceRequest.EndsAt;
    /** A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50. */
    id: string;
    starts_at?: CreateStorePromoRuleEcommerceRequest.StartsAt;
    /** The target that the discount applies to. */
    target: CreateStorePromoRuleEcommerceRequest.Target;
    /** The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes. */
    title?: string;
    /** Type of discount. For free shipping set type to fixed. */
    type: CreateStorePromoRuleEcommerceRequest.Type;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updated_at_foreign?: string;
}

export namespace CreateStorePromoRuleEcommerceRequest {
    export type Amount = number | string;
    export type EndsAt = string | string | string | ("" | "0000-00-00" | "0000-00-00 00:00:00");
    export type StartsAt = string | string | string | ("" | "0000-00-00" | "0000-00-00 00:00:00");
    /** The target that the discount applies to. */
    export const Target = {
        PerItem: "per_item",
        Total: "total",
        Shipping: "shipping",
    } as const;
    export type Target = (typeof Target)[keyof typeof Target];
    /** Type of discount. For free shipping set type to fixed. */
    export const Type = {
        Fixed: "fixed",
        Percentage: "percentage",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}

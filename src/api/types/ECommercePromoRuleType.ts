//  This file was auto-generated from our API Definition.

/** Type of discount. For free shipping set type to fixed. */
export const ECommercePromoRuleType = {
    Fixed: "fixed",
    Percentage: "percentage",
} as const;
export type ECommercePromoRuleType = (typeof ECommercePromoRuleType)[keyof typeof ECommercePromoRuleType];

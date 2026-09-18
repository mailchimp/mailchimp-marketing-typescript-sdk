//  This file was auto-generated from our API Definition.

/** The target that the discount applies to. */
export const ECommercePromoRuleTarget = {
    PerItem: "per_item",
    Total: "total",
    Shipping: "shipping",
} as const;
export type ECommercePromoRuleTarget = (typeof ECommercePromoRuleTarget)[keyof typeof ECommercePromoRuleTarget];

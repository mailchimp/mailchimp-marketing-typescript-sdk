//  This file was auto-generated from our API Definition.

/** The target that the discount applies to. */
export const CreateStorePromoRuleEcommerceRequestTarget = {
    PerItem: "per_item",
    Total: "total",
    Shipping: "shipping",
} as const;
export type CreateStorePromoRuleEcommerceRequestTarget =
    (typeof CreateStorePromoRuleEcommerceRequestTarget)[keyof typeof CreateStorePromoRuleEcommerceRequestTarget];

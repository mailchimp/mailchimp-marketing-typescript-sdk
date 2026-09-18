//  This file was auto-generated from our API Definition.

/** Type of discount. For free shipping set type to fixed. */
export const CreateStorePromoRuleEcommerceRequestType = {
    Fixed: "fixed",
    Percentage: "percentage",
} as const;
export type CreateStorePromoRuleEcommerceRequestType =
    (typeof CreateStorePromoRuleEcommerceRequestType)[keyof typeof CreateStorePromoRuleEcommerceRequestType];

//  This file was auto-generated from our API Definition.

/** Type of discount. For free shipping set type to fixed */
export const ECommerceOrderPromosItemType = {
    Fixed: "fixed",
    Percentage: "percentage",
} as const;
export type ECommerceOrderPromosItemType =
    (typeof ECommerceOrderPromosItemType)[keyof typeof ECommerceOrderPromosItemType];

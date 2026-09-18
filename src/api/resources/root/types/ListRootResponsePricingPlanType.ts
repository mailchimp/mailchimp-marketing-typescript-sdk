//  This file was auto-generated from our API Definition.

/** The type of pricing plan the account is on. */
export const ListRootResponsePricingPlanType = {
    Monthly: "monthly",
    PayAsYouGo: "pay_as_you_go",
    ForeverFree: "forever_free",
} as const;
export type ListRootResponsePricingPlanType =
    (typeof ListRootResponsePricingPlanType)[keyof typeof ListRootResponsePricingPlanType];

//  This file was auto-generated from our API Definition.

/** The action that triggers the delay of an automation emails. */
export const UpdateEmailAutomationsRequestDelayAction = {
    Signup: "signup",
    EcommAbandonedBrowse: "ecomm_abandoned_browse",
    EcommAbandonedCart: "ecomm_abandoned_cart",
} as const;
export type UpdateEmailAutomationsRequestDelayAction =
    (typeof UpdateEmailAutomationsRequestDelayAction)[keyof typeof UpdateEmailAutomationsRequestDelayAction];

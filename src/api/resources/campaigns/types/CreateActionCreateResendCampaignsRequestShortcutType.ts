//  This file was auto-generated from our API Definition.

/** Which campaign resend shortcut to use. Default is `to_non_openers`. */
export const CreateActionCreateResendCampaignsRequestShortcutType = {
    ToNonOpeners: "to_non_openers",
    ToNewSubscribers: "to_new_subscribers",
    ToNonClickers: "to_non_clickers",
    ToNonPurchasers: "to_non_purchasers",
} as const;
export type CreateActionCreateResendCampaignsRequestShortcutType =
    (typeof CreateActionCreateResendCampaignsRequestShortcutType)[keyof typeof CreateActionCreateResendCampaignsRequestShortcutType];

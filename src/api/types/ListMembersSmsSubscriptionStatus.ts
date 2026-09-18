//  This file was auto-generated from our API Definition.

/** The status of an SMS subscription. */
export const ListMembersSmsSubscriptionStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Nonsubscribed: "nonsubscribed",
    Pending: "pending",
} as const;
export type ListMembersSmsSubscriptionStatus =
    (typeof ListMembersSmsSubscriptionStatus)[keyof typeof ListMembersSmsSubscriptionStatus];

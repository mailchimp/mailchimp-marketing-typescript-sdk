//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const ListsPostStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type ListsPostStatus = (typeof ListsPostStatus)[keyof typeof ListsPostStatus];

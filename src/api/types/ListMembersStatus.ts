//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const ListMembersStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
    Archived: "archived",
} as const;
export type ListMembersStatus = (typeof ListMembersStatus)[keyof typeof ListMembersStatus];

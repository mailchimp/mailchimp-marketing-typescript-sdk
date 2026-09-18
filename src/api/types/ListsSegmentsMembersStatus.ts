//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const ListsSegmentsMembersStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type ListsSegmentsMembersStatus = (typeof ListsSegmentsMembersStatus)[keyof typeof ListsSegmentsMembersStatus];

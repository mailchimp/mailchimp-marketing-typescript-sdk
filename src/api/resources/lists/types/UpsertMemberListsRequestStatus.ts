//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const UpsertMemberListsRequestStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type UpsertMemberListsRequestStatus =
    (typeof UpsertMemberListsRequestStatus)[keyof typeof UpsertMemberListsRequestStatus];

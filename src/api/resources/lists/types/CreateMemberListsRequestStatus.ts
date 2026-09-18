//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const CreateMemberListsRequestStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type CreateMemberListsRequestStatus =
    (typeof CreateMemberListsRequestStatus)[keyof typeof CreateMemberListsRequestStatus];

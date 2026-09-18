//  This file was auto-generated from our API Definition.

/** Subscriber's current status. */
export const UpdateMemberListsRequestStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type UpdateMemberListsRequestStatus =
    (typeof UpdateMemberListsRequestStatus)[keyof typeof UpdateMemberListsRequestStatus];

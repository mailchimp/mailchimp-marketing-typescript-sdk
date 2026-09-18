//  This file was auto-generated from our API Definition.

/** Subscriber's status. This value is required only if the email address is not already present on the list. */
export const UpsertMemberListsRequestStatusIfNew = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type UpsertMemberListsRequestStatusIfNew =
    (typeof UpsertMemberListsRequestStatusIfNew)[keyof typeof UpsertMemberListsRequestStatusIfNew];

//  This file was auto-generated from our API Definition.

export const BatchSubscribeOrUnsubscribeListsRequestMembersItemStatusIfNew = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type BatchSubscribeOrUnsubscribeListsRequestMembersItemStatusIfNew =
    (typeof BatchSubscribeOrUnsubscribeListsRequestMembersItemStatusIfNew)[keyof typeof BatchSubscribeOrUnsubscribeListsRequestMembersItemStatusIfNew];

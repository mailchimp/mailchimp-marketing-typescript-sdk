//  This file was auto-generated from our API Definition.

export const BatchSubscribeOrUnsubscribeListsRequestMembersItemStatus = {
    Subscribed: "subscribed",
    Unsubscribed: "unsubscribed",
    Cleaned: "cleaned",
    Pending: "pending",
    Transactional: "transactional",
} as const;
export type BatchSubscribeOrUnsubscribeListsRequestMembersItemStatus =
    (typeof BatchSubscribeOrUnsubscribeListsRequestMembersItemStatus)[keyof typeof BatchSubscribeOrUnsubscribeListsRequestMembersItemStatus];

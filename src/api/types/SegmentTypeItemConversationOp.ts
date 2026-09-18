//  This file was auto-generated from our API Definition.

/** The status of a member's interaction with a conversation. One of the following: has replied or has not replied. */
export const SegmentTypeItemConversationOp = {
    Member: "member",
    Notmember: "notmember",
} as const;
export type SegmentTypeItemConversationOp =
    (typeof SegmentTypeItemConversationOp)[keyof typeof SegmentTypeItemConversationOp];

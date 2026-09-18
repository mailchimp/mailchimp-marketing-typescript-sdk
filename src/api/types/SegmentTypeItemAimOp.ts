//  This file was auto-generated from our API Definition.

/** The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent. */
export const SegmentTypeItemAimOp = {
    Open: "open",
    Click: "click",
    Sent: "sent",
    Noopen: "noopen",
    Noclick: "noclick",
    Nosent: "nosent",
} as const;
export type SegmentTypeItemAimOp = (typeof SegmentTypeItemAimOp)[keyof typeof SegmentTypeItemAimOp];

//  This file was auto-generated from our API Definition.

/** Whether the member's address merge field contains/does not contain a value or is/is not blank. */
export const SegmentTypeItemAddressMergeOp = {
    Contains: "contains",
    Notcontain: "notcontain",
    Blank: "blank",
    BlankNot: "blank_not",
} as const;
export type SegmentTypeItemAddressMergeOp =
    (typeof SegmentTypeItemAddressMergeOp)[keyof typeof SegmentTypeItemAddressMergeOp];

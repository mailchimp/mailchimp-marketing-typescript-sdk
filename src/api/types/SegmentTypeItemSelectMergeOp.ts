//  This file was auto-generated from our API Definition.

/** Whether the member's merge information is/is not a value or is/is not blank. */
export const SegmentTypeItemSelectMergeOp = {
    Is: "is",
    Not: "not",
    Blank: "blank",
    BlankNot: "blank_not",
    Notcontain: "notcontain",
    Contains: "contains",
} as const;
export type SegmentTypeItemSelectMergeOp =
    (typeof SegmentTypeItemSelectMergeOp)[keyof typeof SegmentTypeItemSelectMergeOp];

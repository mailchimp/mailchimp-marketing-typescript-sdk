//  This file was auto-generated from our API Definition.

/** Whether the member's merge information is/is not, is greater/less than a value or is/is not blank. */
export const SegmentTypeItemDateMergeOp = {
    Is: "is",
    Not: "not",
    Less: "less",
    Blank: "blank",
    BlankNot: "blank_not",
    Greater: "greater",
} as const;
export type SegmentTypeItemDateMergeOp = (typeof SegmentTypeItemDateMergeOp)[keyof typeof SegmentTypeItemDateMergeOp];

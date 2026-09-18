//  This file was auto-generated from our API Definition.

/** Whether the member's merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value */
export const SegmentTypeItemTextMergeOp = {
    Is: "is",
    Not: "not",
    Contains: "contains",
    Notcontain: "notcontain",
    Starts: "starts",
    Ends: "ends",
    Greater: "greater",
    Less: "less",
    Blank: "blank",
    BlankNot: "blank_not",
} as const;
export type SegmentTypeItemTextMergeOp = (typeof SegmentTypeItemTextMergeOp)[keyof typeof SegmentTypeItemTextMergeOp];

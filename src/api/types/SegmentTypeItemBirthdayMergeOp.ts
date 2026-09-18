//  This file was auto-generated from our API Definition.

/** Whether the member's birthday merge information is/is not a certain date or is/is not blank. */
export const SegmentTypeItemBirthdayMergeOp = {
    Is: "is",
    Not: "not",
    Blank: "blank",
    BlankNot: "blank_not",
} as const;
export type SegmentTypeItemBirthdayMergeOp =
    (typeof SegmentTypeItemBirthdayMergeOp)[keyof typeof SegmentTypeItemBirthdayMergeOp];

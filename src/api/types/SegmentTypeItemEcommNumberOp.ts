//  This file was auto-generated from our API Definition.

/** Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value. */
export const SegmentTypeItemEcommNumberOp = {
    Is: "is",
    Not: "not",
    Greater: "greater",
    Less: "less",
} as const;
export type SegmentTypeItemEcommNumberOp =
    (typeof SegmentTypeItemEcommNumberOp)[keyof typeof SegmentTypeItemEcommNumberOp];

//  This file was auto-generated from our API Definition.

/** Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number. */
export const SegmentTypeItemMemberRatingOp = {
    Is: "is",
    Not: "not",
    Greater: "greater",
    Less: "less",
} as const;
export type SegmentTypeItemMemberRatingOp =
    (typeof SegmentTypeItemMemberRatingOp)[keyof typeof SegmentTypeItemMemberRatingOp];

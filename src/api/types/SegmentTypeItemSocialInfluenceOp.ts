//  This file was auto-generated from our API Definition.

/** Members who have a rating that is/not or greater/less than the rating provided. */
export const SegmentTypeItemSocialInfluenceOp = {
    Is: "is",
    Not: "not",
    Greater: "greater",
    Less: "less",
} as const;
export type SegmentTypeItemSocialInfluenceOp =
    (typeof SegmentTypeItemSocialInfluenceOp)[keyof typeof SegmentTypeItemSocialInfluenceOp];

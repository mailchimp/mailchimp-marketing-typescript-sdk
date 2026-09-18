//  This file was auto-generated from our API Definition.

/** Whether the member's signup source was/was not a particular value. */
export const SegmentTypeItemSignupSourceOp = {
    SourceIs: "source_is",
    SourceNot: "source_not",
} as const;
export type SegmentTypeItemSignupSourceOp =
    (typeof SegmentTypeItemSignupSourceOp)[keyof typeof SegmentTypeItemSignupSourceOp];

//  This file was auto-generated from our API Definition.

/** Whether the website activity happened after, before, or at a given timestamp. */
export const SegmentTypeItemGoalTimestampOp = {
    Greater: "greater",
    Less: "less",
    Is: "is",
} as const;
export type SegmentTypeItemGoalTimestampOp =
    (typeof SegmentTypeItemGoalTimestampOp)[keyof typeof SegmentTypeItemGoalTimestampOp];

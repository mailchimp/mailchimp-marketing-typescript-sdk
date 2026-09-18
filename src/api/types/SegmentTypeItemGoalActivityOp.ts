//  This file was auto-generated from our API Definition.

/** Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string. */
export const SegmentTypeItemGoalActivityOp = {
    Is: "is",
    GoalNot: "goal_not",
    Contains: "contains",
    GoalNotcontain: "goal_notcontain",
    Starts: "starts",
    Ends: "ends",
} as const;
export type SegmentTypeItemGoalActivityOp =
    (typeof SegmentTypeItemGoalActivityOp)[keyof typeof SegmentTypeItemGoalActivityOp];

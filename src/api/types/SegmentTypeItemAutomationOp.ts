//  This file was auto-generated from our API Definition.

/** The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow. */
export const SegmentTypeItemAutomationOp = {
    Started: "started",
    Completed: "completed",
    NotStarted: "not_started",
    NotCompleted: "not_completed",
} as const;
export type SegmentTypeItemAutomationOp =
    (typeof SegmentTypeItemAutomationOp)[keyof typeof SegmentTypeItemAutomationOp];

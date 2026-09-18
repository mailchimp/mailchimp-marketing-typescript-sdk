//  This file was auto-generated from our API Definition.

/** The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey. */
export const SegmentTypeItemSurveyMonkeyOp = {
    Started: "started",
    Completed: "completed",
    NotStarted: "not_started",
    NotCompleted: "not_completed",
} as const;
export type SegmentTypeItemSurveyMonkeyOp =
    (typeof SegmentTypeItemSurveyMonkeyOp)[keyof typeof SegmentTypeItemSurveyMonkeyOp];

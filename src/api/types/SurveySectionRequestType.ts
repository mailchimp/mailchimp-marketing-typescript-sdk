//  This file was auto-generated from our API Definition.

/** The section type. */
export const SurveySectionRequestType = {
    Introduction: "introduction",
    Context: "context",
    Question: "question",
} as const;
export type SurveySectionRequestType = (typeof SurveySectionRequestType)[keyof typeof SurveySectionRequestType];

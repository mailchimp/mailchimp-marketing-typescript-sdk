//  This file was auto-generated from our API Definition.

/** The response type of the survey question. */
export const SurveySectionRequestQuestionType = {
    PickOne: "pickOne",
    PickMany: "pickMany",
    Range: "range",
    Text: "text",
    Email: "email",
    ContactInformation: "contactInformation",
    Dropdown: "dropdown",
} as const;
export type SurveySectionRequestQuestionType =
    (typeof SurveySectionRequestQuestionType)[keyof typeof SurveySectionRequestQuestionType];

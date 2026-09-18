//  This file was auto-generated from our API Definition.

/** The response type of the survey question. */
export const SurveyQuestionReportType = {
    PickOne: "pickOne",
    PickMany: "pickMany",
    Range: "range",
    Text: "text",
    Email: "email",
    ContactInformation: "contactInformation",
    Dropdown: "dropdown",
} as const;
export type SurveyQuestionReportType = (typeof SurveyQuestionReportType)[keyof typeof SurveyQuestionReportType];

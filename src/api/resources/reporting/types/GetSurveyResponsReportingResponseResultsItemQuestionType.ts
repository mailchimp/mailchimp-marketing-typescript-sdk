//  This file was auto-generated from our API Definition.

/** The type of question this is. */
export const GetSurveyResponsReportingResponseResultsItemQuestionType = {
    PickOne: "pickOne",
    PickMany: "pickMany",
    Range: "range",
    Text: "text",
    Email: "email",
    ContactInformation: "contactInformation",
    Dropdown: "dropdown",
} as const;
export type GetSurveyResponsReportingResponseResultsItemQuestionType =
    (typeof GetSurveyResponsReportingResponseResultsItemQuestionType)[keyof typeof GetSurveyResponsReportingResponseResultsItemQuestionType];

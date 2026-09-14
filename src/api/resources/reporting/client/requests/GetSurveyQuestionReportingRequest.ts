//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         survey_id: "survey_id",
 *         question_id: "question_id"
 *     }
 */
export interface GetSurveyQuestionReportingRequest {
    /** The ID of the survey. */
    survey_id: string;
    /** The ID of the survey question. */
    question_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

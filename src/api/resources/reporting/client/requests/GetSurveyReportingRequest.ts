//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         surveyId: "survey_id"
 *     }
 */
export interface GetSurveyReportingRequest {
    /** The ID of the survey. */
    surveyId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

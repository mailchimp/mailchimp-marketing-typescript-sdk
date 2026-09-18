//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         surveyId: "survey_id"
 *     }
 */
export interface ListSurveyResponsesReportingRequest {
    /** The ID of the survey. */
    surveyId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The ID of the question that was answered. */
    answeredQuestion?: number;
    /** The ID of the option chosen to filter responses on. */
    choseAnswer?: string;
    /** Filter survey responses by familiarity of the respondents. */
    respondentFamiliarityIs?: Mailchimp.ListSurveyResponsesReportingRequestRespondentFamiliarityIs;
}

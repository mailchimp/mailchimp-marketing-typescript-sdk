//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         surveyId: "survey_id",
 *         questionId: "question_id"
 *     }
 */
export interface ListSurveyQuestionAnswersReportingRequest {
    /** The ID of the survey. */
    surveyId: string;
    /** The ID of the survey question. */
    questionId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** Filter survey responses by familiarity of the respondents. */
    respondentFamiliarityIs?: Mailchimp.ListSurveyQuestionAnswersReportingRequestRespondentFamiliarityIs;
}

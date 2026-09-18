//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A single question and the response to that question.
 */
export interface GetSurveyResponsReportingResponseResultsItem {
    /** The answer to this survey question. */
    answer?: string;
    /** The survey question. */
    query?: string;
    /** The unique ID for this question. */
    questionId?: string;
    /** The type of question this is. */
    questionType?: Mailchimp.GetSurveyResponsReportingResponseResultsItemQuestionType;
}

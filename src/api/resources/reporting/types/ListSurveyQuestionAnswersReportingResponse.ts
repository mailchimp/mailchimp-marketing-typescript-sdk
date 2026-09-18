//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface ListSurveyQuestionAnswersReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSurveyQuestionAnswersReportingResponseLinksItem[];
    /** An array of answers for a question on the survey. */
    answers?: Mailchimp.ListSurveyQuestionAnswersReportingResponseAnswersItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

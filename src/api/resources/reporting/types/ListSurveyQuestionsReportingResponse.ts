//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface ListSurveyQuestionsReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSurveyQuestionsReportingResponseLinksItem[];
    /** An array of reports for each question on the survey. */
    questions?: Mailchimp.SurveyQuestionReport[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

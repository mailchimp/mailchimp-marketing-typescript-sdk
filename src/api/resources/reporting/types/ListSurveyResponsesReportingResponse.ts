//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface ListSurveyResponsesReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSurveyResponsesReportingResponseLinksItem[];
    /** An array of responses to a survey. */
    responses?: Mailchimp.ListSurveyResponsesReportingResponseResponsesItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

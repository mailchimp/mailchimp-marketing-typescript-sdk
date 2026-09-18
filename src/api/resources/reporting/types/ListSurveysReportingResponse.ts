//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface ListSurveysReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSurveysReportingResponseLinksItem[];
    /** The surveys that have reports available. */
    surveys?: Mailchimp.ListSurveysReportingResponseSurveysItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

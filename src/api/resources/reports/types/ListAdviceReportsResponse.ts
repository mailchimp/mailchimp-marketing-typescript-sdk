//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of feedback based on a campaign's statistics.
 */
export interface ListAdviceReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAdviceReportsResponseLinksItem[];
    /** An array of objects, each representing a point of campaign feedback. */
    advice?: Mailchimp.ListAdviceReportsResponseAdviceItem[];
    /** The campaign id. */
    campaignId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

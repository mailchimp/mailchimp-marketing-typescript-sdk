//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of abuse complaints for a specific list.
 */
export interface ListAbuseReportsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAbuseReportsReportsResponseLinksItem[];
    /** An array of objects, each representing an abuse report resource. */
    abuseReports?: Mailchimp.AbuseComplaint[];
    /** The campaign id. */
    campaignId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

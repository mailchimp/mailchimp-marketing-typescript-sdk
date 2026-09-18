//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Statistics for the top-performing email domains in a campaign.
 */
export interface ListDomainPerformanceReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListDomainPerformanceReportsResponseLinksItem[];
    /** The unique id for the campaign. */
    campaignId?: string;
    /** The top 5 email domains based on total delivered emails. */
    domains?: Mailchimp.ListDomainPerformanceReportsResponseDomainsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** The total number of emails sent for the campaign. */
    totalSent?: number;
}

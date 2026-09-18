//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of reports containing child campaigns for a specific campaign.
 */
export interface ListSubReportsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSubReportsReportsResponseLinksItem[];
    /** Unique identifier of the parent campaign */
    campaignId?: string;
    /** An array of objects, each representing a report resource. */
    reports?: Mailchimp.CampaignReport[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

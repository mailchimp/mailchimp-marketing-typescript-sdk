//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of members who have unsubscribed from a specific campaign.
 */
export interface ListUnsubscribedReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListUnsubscribedReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** An array of objects, each representing a member who unsubscribed from a campaign. */
    unsubscribes?: Mailchimp.Unsubscribes[];
}

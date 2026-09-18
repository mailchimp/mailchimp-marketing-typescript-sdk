//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of subscribers who were sent a specific campaign.
 */
export interface ListSentToReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSentToReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** An array of objects, each representing a campaign recipient. */
    sentTo?: Mailchimp.SentTo[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

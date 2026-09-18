//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of the comment feedback for a specific campaign.
 */
export interface ListFeedbackCampaignsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFeedbackCampaignsResponseLinksItem[];
    /** The unique id for the campaign. */
    campaignId?: string;
    /** A collection of feedback items for a campaign. */
    feedback?: Mailchimp.ListFeedbackCampaignsResponseFeedbackItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

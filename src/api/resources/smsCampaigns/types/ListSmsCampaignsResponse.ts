//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of SMS campaigns.
 */
export interface ListSmsCampaignsResponse {
    /** An array of SMS campaigns. */
    smsCampaigns?: Mailchimp.SmsCampaign[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSmsCampaignsResponseLinksItem[];
}

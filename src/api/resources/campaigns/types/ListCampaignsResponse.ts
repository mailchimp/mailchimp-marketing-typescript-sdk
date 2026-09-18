//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of campaigns.
 */
export interface ListCampaignsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListCampaignsResponseLinksItem[];
    /** An array of campaigns. */
    campaigns?: Mailchimp.Campaigns[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Campaigns and Snippets found for given search term.
 */
export interface ListSearchCampaignsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSearchCampaignsResponseLinksItem[];
    /** An array of matching campaigns and snippets. */
    results?: Mailchimp.ListSearchCampaignsResponseResultsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

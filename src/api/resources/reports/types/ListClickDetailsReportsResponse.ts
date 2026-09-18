//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of URLs and unique IDs included in HTML and plain-text versions of a campaign.
 */
export interface ListClickDetailsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListClickDetailsReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** An array of objects, each representing a specific URL contained in the campaign. */
    urlsClicked?: Mailchimp.ClickDetailReport[];
}

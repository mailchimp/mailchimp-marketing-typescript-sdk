//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Top open locations for a specific campaign.
 */
export interface ListLocationsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListLocationsReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** An array of objects, each representing a top location for opens. */
    locations?: Mailchimp.ListLocationsReportsResponseLocationsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

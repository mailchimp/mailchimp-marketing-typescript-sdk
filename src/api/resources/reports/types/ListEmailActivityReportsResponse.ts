//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of member's subscriber activity in a specific campaign.
 */
export interface ListEmailActivityReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListEmailActivityReportsResponseLinksItem[];
    /** The unique id for the sent campaign. */
    campaignId?: string;
    /** An array of members that were sent the campaign. */
    emails?: Mailchimp.EmailActivity[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

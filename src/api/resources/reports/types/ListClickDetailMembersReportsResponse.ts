//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of members who clicked on a specific link within a campaign.
 */
export interface ListClickDetailMembersReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListClickDetailMembersReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** An array of objects, each representing a member who clicked a specific link within a campaign. */
    members?: Mailchimp.ClickDetailMember[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

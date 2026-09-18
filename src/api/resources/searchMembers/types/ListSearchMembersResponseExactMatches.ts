//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Exact matches of the provided search query.
 */
export interface ListSearchMembersResponseExactMatches {
    /** An array of objects, each representing a specific list member. */
    members?: Mailchimp.ListMembers[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

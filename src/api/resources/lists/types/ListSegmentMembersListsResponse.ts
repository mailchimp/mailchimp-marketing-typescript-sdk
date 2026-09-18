//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * View members in a specific list segment.
 */
export interface ListSegmentMembersListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSegmentMembersListsResponseLinksItem[];
    /** An array of objects, each representing a specific list member. */
    members?: Mailchimp.ListsSegmentsMembers[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

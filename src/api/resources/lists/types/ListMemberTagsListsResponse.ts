//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of tags assigned to a list member.
 */
export interface ListMemberTagsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberTagsListsResponseLinksItem[];
    /** A list of tags assigned to the list member. */
    tags?: Mailchimp.ListMemberTagsListsResponseTagsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

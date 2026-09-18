//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Manage members of a specific Mailchimp list, including currently subscribed, unsubscribed, and bounced members.
 */
export interface ListMembersListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMembersListsResponseLinksItem[];
    /** The list id. */
    listId?: string;
    /** An array of objects, each representing a specific list member. */
    members?: Mailchimp.ListMembers[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

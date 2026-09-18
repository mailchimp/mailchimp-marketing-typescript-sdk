//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The last 50 Goal events for a member on a specific list.
 */
export interface ListMemberGoalsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberGoalsListsResponseLinksItem[];
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The last 50 Goal events triggered by a member. */
    goals?: Mailchimp.ListMemberGoalsListsResponseGoalsItem[];
    /** The list id. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

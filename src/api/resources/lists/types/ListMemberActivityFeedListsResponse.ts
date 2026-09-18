//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The member activity events for a given member.
 */
export interface ListMemberActivityFeedListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberActivityFeedListsResponseLinksItem[];
    /** An array of objects, each representing a contact event. There are multiple possible types, see the [activity schema documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#activity-schemas). */
    activity?: unknown[];
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The list id. */
    listId?: string;
}

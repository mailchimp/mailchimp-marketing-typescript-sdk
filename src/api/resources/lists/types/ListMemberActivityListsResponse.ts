//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The last 50 member events for a list.
 */
export interface ListMemberActivityListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberActivityListsResponseLinksItem[];
    /** An array of objects, each representing a member event. */
    activity?: Mailchimp.ListMemberActivityListsResponseActivityItem[];
    /** As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address. */
    contactId?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The list id. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

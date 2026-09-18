//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The last 10 notes for a specific list member, based on date created.
 */
export interface ListMemberNotesListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberNotesListsResponseLinksItem[];
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The list id. */
    listId?: string;
    /** An array of objects, each representing a note resource. */
    notes?: Mailchimp.MemberNotes[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

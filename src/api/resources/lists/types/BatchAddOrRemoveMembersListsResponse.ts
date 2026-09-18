//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Batch add/remove List members to/from static segment
 */
export interface BatchAddOrRemoveMembersListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.BatchAddOrRemoveMembersListsResponseLinksItem[];
    /** The total number of items matching the query, irrespective of pagination. */
    errorCount?: number;
    /** An array of objects, each representing an array of email addresses that could not be added to the segment or removed and an error message providing more details. */
    errors?: Mailchimp.BatchAddOrRemoveMembersListsResponseErrorsItem[];
    /** An array of objects, each representing a new member that was added to the static segment. */
    membersAdded?: Mailchimp.ListsPost[];
    /** An array of objects, each representing an existing list member that got deleted from the static segment. */
    membersRemoved?: Mailchimp.ListsPost[];
    /** The total number of items matching the query, irrespective of pagination. */
    totalAdded?: number;
    /** The total number of items matching the query, irrespective of pagination. */
    totalRemoved?: number;
}

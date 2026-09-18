//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Batch update list members.
 */
export interface BatchSubscribeOrUnsubscribeListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.BatchSubscribeOrUnsubscribeListsResponseLinksItem[];
    /** The total number of items matching the query, irrespective of pagination. */
    errorCount?: number;
    /** An array of objects, each representing an email address that could not be added to the list or updated and an error message providing more details. */
    errors?: Mailchimp.BatchSubscribeOrUnsubscribeListsResponseErrorsItem[];
    /** An array of objects, each representing a new member that was added to the list. */
    newMembers?: Mailchimp.ListsPost[];
    /** The total number of items matching the query, irrespective of pagination. */
    totalCreated?: number;
    /** The total number of items matching the query, irrespective of pagination. */
    totalUpdated?: number;
    /** An array of objects, each representing an existing list member whose subscription status was updated. */
    updatedMembers?: Mailchimp.ListsPost[];
}

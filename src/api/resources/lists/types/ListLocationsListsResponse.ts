//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of List's locations.
 */
export interface ListLocationsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListLocationsListsResponseLinksItem[];
    /** The unique id for the list. */
    listId?: string;
    /** An array of objects, each representing a list's top subscriber locations. */
    locations?: Mailchimp.ListLocationsListsResponseLocationsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

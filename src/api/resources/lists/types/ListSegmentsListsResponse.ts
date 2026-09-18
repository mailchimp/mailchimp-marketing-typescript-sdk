//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of available segments.
 */
export interface ListSegmentsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSegmentsListsResponseLinksItem[];
    /** The list id. */
    listId?: string;
    /** An array of objects, each representing a list segment. */
    segments?: Mailchimp.List[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

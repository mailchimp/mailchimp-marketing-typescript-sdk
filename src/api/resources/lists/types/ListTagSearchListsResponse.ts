//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of tags matching the input query.
 */
export interface ListTagSearchListsResponse {
    /** A list of matching tags. */
    tags?: Mailchimp.ListTagSearchListsResponseTagsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The [merge fields](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 */
export interface ListMergeFieldsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMergeFieldsListsResponseLinksItem[];
    /** The list id. */
    listId?: string;
    /** The maximum number of merge fields this audience can hold. The limit is determined by the account's plan. Subtract `total_items` from this value to derive the remaining capacity. */
    mergeFieldLimit?: number;
    /** An array of objects, each representing a merge field resource. */
    mergeFields?: Mailchimp.MergeField[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

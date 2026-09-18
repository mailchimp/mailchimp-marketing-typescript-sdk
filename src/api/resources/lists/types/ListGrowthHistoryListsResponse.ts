//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A month-by-month summary of a specific list's growth activity.
 */
export interface ListGrowthHistoryListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListGrowthHistoryListsResponseLinksItem[];
    /** An array of objects, each representing a monthly growth report for a list. */
    history?: Mailchimp.GrowthHistory[];
    /** The list id. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

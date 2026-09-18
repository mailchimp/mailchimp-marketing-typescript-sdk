//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Up to the previous 180 days of daily detailed aggregated activity stats for a specific list. Does not include AutoResponder or Automation activity.
 */
export interface ListActivityListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListActivityListsResponseLinksItem[];
    /** Recent list activity. */
    activity?: Mailchimp.ListActivityListsResponseActivityItem[];
    /** The unique id for the list. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

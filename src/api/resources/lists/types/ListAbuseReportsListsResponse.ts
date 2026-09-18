//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
 */
export interface ListAbuseReportsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAbuseReportsListsResponseLinksItem[];
    /** An array of objects, each representing an abuse report resource. */
    abuseReports?: Mailchimp.ListsAbuseReports[];
    /** The list id for the abuse report. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

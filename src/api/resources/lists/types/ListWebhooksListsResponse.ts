//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Manage webhooks for a specific list.
 */
export interface ListWebhooksListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListWebhooksListsResponseLinksItem[];
    /** The list id. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** An array of objects, each representing a specific list member. */
    webhooks?: Mailchimp.ListWebhooks[];
}

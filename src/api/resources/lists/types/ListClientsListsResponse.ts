//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The top email clients based on user-agent strings.
 */
export interface ListClientsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListClientsListsResponseLinksItem[];
    /** An array of top email clients. */
    clients?: Mailchimp.ListClientsListsResponseClientsItem[];
    /** The list id. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

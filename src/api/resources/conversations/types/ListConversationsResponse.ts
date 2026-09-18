//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of this account's tracked conversations.
 */
export interface ListConversationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListConversationsResponseLinksItem[];
    /** A list of conversations. */
    conversations?: Mailchimp.Conversation[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

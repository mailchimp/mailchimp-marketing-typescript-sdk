//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Messages from a specific conversation.
 */
export interface ListMessagesConversationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMessagesConversationsResponseLinksItem[];
    /** A string that identifies this conversation. */
    conversationId?: string;
    /** An array of objects, each representing a conversation messages resources. */
    conversationMessages?: Mailchimp.ConversationMessage[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

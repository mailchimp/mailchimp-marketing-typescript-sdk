//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         conversationId: "conversation_id"
 *     }
 */
export interface ListMessagesConversationsRequest {
    /** The unique id for the conversation. */
    conversationId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** Whether a conversation message has been marked as read. */
    isRead?: Mailchimp.ListMessagesConversationsRequestIsRead;
    /** Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeTimestamp?: Date;
    /** Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceTimestamp?: Date;
}

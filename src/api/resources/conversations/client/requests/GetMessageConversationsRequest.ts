//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         conversationId: "conversation_id",
 *         messageId: "message_id"
 *     }
 */
export interface GetMessageConversationsRequest {
    /** The unique id for the conversation. */
    conversationId: string;
    /** The unique id for the conversation message. */
    messageId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

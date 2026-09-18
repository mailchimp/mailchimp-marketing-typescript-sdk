//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         conversationId: "conversation_id"
 *     }
 */
export interface GetConversationsRequest {
    /** The unique id for the conversation. */
    conversationId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

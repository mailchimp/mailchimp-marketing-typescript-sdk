//  This file was auto-generated from our API Definition.

/**
 * The most recent message in the conversation.
 */
export interface ConversationLastMessage {
    /** A label representing the email of the sender of this message. */
    fromEmail?: string;
    /** A label representing the sender of this message. */
    fromLabel?: string;
    /** The plain-text content of the message. */
    message?: string;
    /** Whether this message has been marked as read. */
    read?: boolean;
    /** The subject of this message. */
    subject?: string;
    /** The date and time the message was either sent or received in ISO 8601 format. */
    timestamp?: Date;
}

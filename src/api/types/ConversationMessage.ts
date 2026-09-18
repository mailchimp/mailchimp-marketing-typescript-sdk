//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 */
export interface ConversationMessage {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ConversationMessageLinksItem[];
    /** A string that identifies this message's conversation */
    conversationId?: string;
    /** A label representing the email of the sender of this message */
    fromEmail?: string;
    /** A label representing the sender of this message */
    fromLabel?: string;
    /** A string that uniquely identifies this message */
    id?: string;
    /** The list's web ID */
    listId?: number;
    /** The plain-text content of the message */
    message?: string;
    /** Whether this message has been marked as read */
    read?: boolean;
    /** The subject of this message */
    subject?: string;
    /** The date and time the message was either sent or received in ISO 8601 format. */
    timestamp?: Date;
}

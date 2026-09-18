//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Details about an individual conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 */
export interface Conversation {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ConversationLinksItem[];
    /** The unique identifier of the campaign for this conversation. */
    campaignId?: string;
    /** A label representing the email of the sender of this message. */
    fromEmail?: string;
    /** A label representing the sender of this message. */
    fromLabel?: string;
    /** A string that uniquely identifies this conversation. */
    id?: string;
    /** The most recent message in the conversation. */
    lastMessage?: Mailchimp.ConversationLastMessage;
    /** The unique identifier of the list for this conversation. */
    listId?: string;
    /** The total number of messages in this conversation. */
    messageCount?: number;
    /** The subject of the message. */
    subject?: string;
    /** The number of unread messages in this conversation. */
    unreadMessages?: number;
}

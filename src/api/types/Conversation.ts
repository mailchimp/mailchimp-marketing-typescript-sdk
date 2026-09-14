//  This file was auto-generated from our API Definition.

/**
 * Details about an individual conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 */
export interface Conversation {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: Conversation.Links.Item[] | undefined;
    /** The unique identifier of the campaign for this conversation. */
    campaign_id?: string | undefined;
    /** A label representing the email of the sender of this message. */
    from_email?: string | undefined;
    /** A label representing the sender of this message. */
    from_label?: string | undefined;
    /** A string that uniquely identifies this conversation. */
    id?: string | undefined;
    /** The most recent message in the conversation. */
    last_message?: Conversation.LastMessage | undefined;
    /** The unique identifier of the list for this conversation. */
    list_id?: string | undefined;
    /** The total number of messages in this conversation. */
    message_count?: number | undefined;
    /** The subject of the message. */
    subject?: string | undefined;
    /** The number of unread messages in this conversation. */
    unread_messages?: number | undefined;
}

export namespace Conversation {
    export type Links = Links.Item[];

    export namespace Links {
        /**
         * This object represents a link from the resource where it is found to another resource or action that may be performed.
         */
        export interface Item {
            /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
            href?: string | undefined;
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            method?: Item.Method | undefined;
            /** As with an HTML 'rel' attribute, this describes the type of link. */
            rel?: string | undefined;
            /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
            schema?: string | undefined;
            /** For GETs, this is a URL representing the schema that the response should conform to. */
            targetSchema?: string | undefined;
        }

        export namespace Item {
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            export const Method = {
                Get: "GET",
                Post: "POST",
                Put: "PUT",
                Patch: "PATCH",
                Delete: "DELETE",
                Options: "OPTIONS",
                Head: "HEAD",
            } as const;
            export type Method = (typeof Method)[keyof typeof Method];
        }
    }

    /**
     * The most recent message in the conversation.
     */
    export interface LastMessage {
        /** A label representing the email of the sender of this message. */
        from_email?: string | undefined;
        /** A label representing the sender of this message. */
        from_label?: string | undefined;
        /** The plain-text content of the message. */
        message?: string | undefined;
        /** Whether this message has been marked as read. */
        read?: boolean | undefined;
        /** The subject of this message. */
        subject?: string | undefined;
        /** The date and time the message was either sent or received in ISO 8601 format. */
        timestamp?: string | undefined;
    }
}

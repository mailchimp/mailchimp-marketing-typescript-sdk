//  This file was auto-generated from our API Definition.

/**
 * An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 */
export interface ConversationMessage {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ConversationMessage.Links.Item[] | undefined;
    /** A string that identifies this message's conversation */
    conversation_id?: string | undefined;
    /** A label representing the email of the sender of this message */
    from_email?: string | undefined;
    /** A label representing the sender of this message */
    from_label?: string | undefined;
    /** A string that uniquely identifies this message */
    id?: string | undefined;
    /** The list's web ID */
    list_id?: number | undefined;
    /** The plain-text content of the message */
    message?: string | undefined;
    /** Whether this message has been marked as read */
    read?: boolean | undefined;
    /** The subject of this message */
    subject?: string | undefined;
    /** The date and time the message was either sent or received in ISO 8601 format. */
    timestamp?: string | undefined;
}

export namespace ConversationMessage {
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
}

//  This file was auto-generated from our API Definition.

/**
 * The content of an SMS campaign.
 */
export interface SmsCampaignContent {
    /** The SMS message body. */
    message_body?: string | undefined;
    /** The estimated number of message segments this content will use. */
    estimated_segments?: number | undefined;
    /** The merge fields used in the message body. */
    merge_fields?: string[] | undefined;
    /** Attached images or files. */
    media?: SmsCampaignContent.Media.Item[] | undefined;
    /** The source that created or imported this content. */
    source?: SmsCampaignContent.Source | undefined;
    /** Additional content properties. */
    properties?: SmsCampaignContent.Properties | undefined;
    /** A list of link types and descriptions for the API schema documents. */
    _links?: SmsCampaignContent.Links.Item[] | undefined;
}

export namespace SmsCampaignContent {
    export type Media = Media.Item[];

    export namespace Media {
        export interface Item {
            /** The URL of the media file. */
            url?: string | undefined;
        }
    }

    /**
     * The source that created or imported this content.
     */
    export interface Source {
        /** The type of source. */
        type?: string | undefined;
        /** The ID of the source. */
        id?: string | undefined;
    }

    /**
     * Additional content properties.
     */
    export interface Properties {
        /** The content type of the message. */
        content_type?: string | undefined;
        /** The sender identifier for the message. */
        sender?: string | undefined;
        /** The language of the opt-out message. */
        optout_message_language?: string | undefined;
    }

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

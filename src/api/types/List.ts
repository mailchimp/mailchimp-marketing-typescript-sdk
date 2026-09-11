//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific segment.
 */
export interface List {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: List.Links.Item[] | undefined;
    /** The date and time the segment was created in ISO 8601 format. */
    created_at?: string | undefined;
    /** The unique id for the segment. */
    id?: number | undefined;
    /** The list id. */
    list_id?: string | undefined;
    /** The number of active subscribers currently included in the segment. */
    member_count?: number | undefined;
    /** The name of the segment. */
    name?: string | undefined;
    /** The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions. */
    options?: List.Options | undefined;
    /** The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). */
    type?: List.Type | undefined;
    /** The date and time the segment was last updated in ISO 8601 format. */
    updated_at?: string | undefined;
}

export namespace List {
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
     * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
     */
    export interface Options {
        conditions?: Mailchimp.SegmentType | undefined;
        /** Match type. */
        match?: Options.Match | undefined;
    }

    export namespace Options {
        /** Match type. */
        export const Match = {
            Any: "any",
            All: "all",
        } as const;
        export type Match = (typeof Match)[keyof typeof Match];
    }

    /** The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). */
    export const Type = {
        Saved: "saved",
        Static: "static",
        Fuzzy: "fuzzy",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}

//  This file was auto-generated from our API Definition.

/**
 * A summary of a specific list's growth activity for a specific month and year.
 */
export interface GrowthHistory {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: GrowthHistory.Links.Item[] | undefined;
    /** Newly cleaned (hard-bounced) members on the list for a specific month. */
    cleaned?: number | undefined;
    /** Newly deleted members on the list for a specific month. */
    deleted?: number | undefined;
    /** (deprecated) */
    existing?: number | undefined;
    /** (deprecated) */
    imports?: number | undefined;
    /** The list id for the growth activity report. */
    list_id?: string | undefined;
    /** The month that the growth history is describing. */
    month?: string | undefined;
    /** (deprecated) */
    optins?: number | undefined;
    /** Pending members on the list for a specific month. */
    pending?: number | undefined;
    /** Newly reconfirmed members on the list for a specific month. */
    reconfirm?: number | undefined;
    /** Total subscribed members on the list at the end of the month. */
    subscribed?: number | undefined;
    /** Subscribers that have been sent transactional emails via Mandrill. */
    transactional?: number | undefined;
    /** Newly unsubscribed members on the list for a specific month. */
    unsubscribed?: number | undefined;
}

export namespace GrowthHistory {
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

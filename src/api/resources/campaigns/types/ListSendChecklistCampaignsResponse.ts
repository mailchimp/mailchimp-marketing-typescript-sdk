//  This file was auto-generated from our API Definition.

/**
 * The send checklist for the campaign.
 */
export interface ListSendChecklistCampaignsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListSendChecklistCampaignsResponse.Links.Item[] | undefined;
    /** Whether the campaign is ready to send. */
    is_ready?: boolean | undefined;
    /** A list of feedback items to review before sending your campaign. */
    items?: ListSendChecklistCampaignsResponse.Items.Item[] | undefined;
}

export namespace ListSendChecklistCampaignsResponse {
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

    export type Items = Items.Item[];

    export namespace Items {
        export interface Item {
            /** Details about the specific feedback item. */
            details?: string | undefined;
            /** The heading for the specific item. */
            heading?: string | undefined;
            /** The ID for the specific item. */
            id?: number | undefined;
            /** The item type. */
            type?: Item.Type | undefined;
        }

        export namespace Item {
            /** The item type. */
            export const Type = {
                Success: "success",
                Warning: "warning",
                Error: "error",
            } as const;
            export type Type = (typeof Type)[keyof typeof Type];
        }
    }
}

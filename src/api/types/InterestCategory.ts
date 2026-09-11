//  This file was auto-generated from our API Definition.

/**
 * Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
 */
export interface InterestCategory {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: InterestCategory.Links.Item[] | undefined;
    /** The order that the categories are displayed in the list. Lower numbers display first. */
    display_order?: number | undefined;
    /** The id for the interest category. */
    id?: string | undefined;
    /** The unique list id for the category. */
    list_id?: string | undefined;
    /** The text description of this category. This field appears on signup forms and is often phrased as a question. */
    title?: string | undefined;
    /** Determines how this category’s interests appear on signup forms. */
    type?: InterestCategory.Type | undefined;
}

export namespace InterestCategory {
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

    /** Determines how this category’s interests appear on signup forms. */
    export const Type = {
        Checkboxes: "checkboxes",
        Dropdown: "dropdown",
        Radio: "radio",
        Hidden: "hidden",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}

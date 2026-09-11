//  This file was auto-generated from our API Definition.

/**
 * Information about a specific template.
 */
export interface TemplateInstance {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: TemplateInstance.Links.Item[] | undefined;
    /** User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active. */
    active?: boolean | undefined;
    /** If available, the category the template is listed in. */
    category?: string | undefined;
    /** How the template's content is put together. */
    content_type?: TemplateInstance.ContentType | undefined;
    /** The login name for template's creator. */
    created_by?: string | undefined;
    /** The date and time the template was created in ISO 8601 format. */
    date_created?: string | undefined;
    /** The date and time the template was edited in ISO 8601 format. */
    date_edited?: string | undefined;
    /** Whether the template uses the drag and drop editor. */
    drag_and_drop?: boolean | undefined;
    /** The login name who last edited the template. */
    edited_by?: string | undefined;
    /** The id of the folder the template is currently in. */
    folder_id?: string | undefined;
    /** The individual id for the template. */
    id?: number | undefined;
    /** The name of the template. */
    name?: string | undefined;
    /** Whether the template contains media queries to make it responsive. */
    responsive?: boolean | undefined;
    /** The URL used for [template sharing](https://mailchimp.com/help/share-a-template/). */
    share_url?: string | undefined;
    /** If available, the URL for a thumbnail of the template. */
    thumbnail?: string | undefined;
    /** The type of template (user, base, or gallery). */
    type?: string | undefined;
}

export namespace TemplateInstance {
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

    /** How the template's content is put together. */
    export const ContentType = {
        Template: "template",
        Multichannel: "multichannel",
        Html: "html",
    } as const;
    export type ContentType = (typeof ContentType)[keyof typeof ContentType];
}

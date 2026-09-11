//  This file was auto-generated from our API Definition.

/**
 * The HTML and plain-text content for a campaign.
 */
export interface CampaignContent {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: CampaignContent.Links.Item[] | undefined;
    /** The Archive HTML for the campaign. */
    archive_html?: string | undefined;
    /** The raw HTML for the campaign. */
    html?: string | undefined;
    /** The plain-text portion of the campaign. If left unspecified, we'll generate this automatically. */
    plain_text?: string | undefined;
    /** Content options for multivariate campaigns. */
    variate_contents?: CampaignContent.VariateContents.Item[] | undefined;
}

export namespace CampaignContent {
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

    export type VariateContents = VariateContents.Item[];

    export namespace VariateContents {
        export interface Item {
            /** Label used to identify the content option. */
            content_label?: string | undefined;
            /** The raw HTML for the campaign. */
            html?: string | undefined;
            /** The plain-text portion of the campaign. If left unspecified, we'll generate this automatically. */
            plain_text?: string | undefined;
        }
    }
}

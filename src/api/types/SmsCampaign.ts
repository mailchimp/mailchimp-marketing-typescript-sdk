//  This file was auto-generated from our API Definition.

/**
 * A single SMS campaign.
 */
export interface SmsCampaign {
    /** A string that uniquely identifies this campaign. */
    id?: string | undefined;
    /** The ID used in the Mailchimp web application. */
    web_id?: string | undefined;
    /** The name of the campaign. */
    name?: string | undefined;
    /** The current status of the campaign. */
    status?: string | undefined;
    /** The channel for this campaign (sms or whatsapp). */
    channel?: string | undefined;
    /** The numeric ID of the list associated with this campaign. */
    list_id?: number | undefined;
    /** The number of recipients for this campaign. */
    recipient_count?: number | undefined;
    /** The date and time the campaign was created. */
    create_time?: string | undefined;
    /** The date and time the campaign is scheduled to send. */
    send_time?: string | undefined;
    /** The date and time the campaign was last updated. */
    updated_at?: string | undefined;
    /** The date and time the campaign will stop sending in ISO 8601 format. */
    expire_time?: string | undefined;
    /** Whether the campaign is configured to send immediately. */
    is_send_now?: boolean | undefined;
    /** The ID of the folder this campaign is in. */
    folder_id?: string | undefined;
    /** The segment IDs used to target recipients for this campaign. */
    segments?: number[] | undefined;
    /** The segment IDs excluded from receiving this campaign. */
    excluded_segments?: number[] | undefined;
    /** A list of link types and descriptions for the API schema documents. */
    _links?: SmsCampaign.Links.Item[] | undefined;
}

export namespace SmsCampaign {
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

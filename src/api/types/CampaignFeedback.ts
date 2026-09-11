//  This file was auto-generated from our API Definition.

/**
 * A specific feedback message from a specific campaign.
 */
export interface CampaignFeedback {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: CampaignFeedback.Links.Item[] | undefined;
    /** The block id for the editable block that the feedback addresses. */
    block_id?: number | undefined;
    /** The unique id for the campaign. */
    campaign_id?: string | undefined;
    /** The date and time the feedback item was created in ISO 8601 format. */
    created_at?: string | undefined;
    /** The login name of the user who created the feedback. */
    created_by?: string | undefined;
    /** The individual id for the feedback item. */
    feedback_id?: number | undefined;
    /** The status of feedback. */
    is_complete?: boolean | undefined;
    /** The content of the feedback. */
    message?: string | undefined;
    /** If a reply, the id of the parent feedback item. */
    parent_id?: number | undefined;
    /** The source of the feedback. */
    source?: CampaignFeedback.Source | undefined;
    /** The date and time the feedback was last updated in ISO 8601 format. */
    updated_at?: string | undefined;
}

export namespace CampaignFeedback {
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

    /** The source of the feedback. */
    export const Source = {
        Api: "api",
        Email: "email",
        Sms: "sms",
        Web: "web",
        Ios: "ios",
        Android: "android",
    } as const;
    export type Source = (typeof Source)[keyof typeof Source];
}

//  This file was auto-generated from our API Definition.

/**
 * A list of a member's subscriber activity in a specific campaign, including opens, clicks, and bounces.
 */
export interface EmailActivity {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: EmailActivity.Links.Item[] | undefined;
    /** An array of objects, each showing an interaction with the email. Member activity limited to 1,000 open activities and 1,000 click activities per member per campaign. */
    activity?: EmailActivity.Activity.Item[] | undefined;
    /** The unique id for the campaign. */
    campaign_id?: string | undefined;
    /** Email address for a subscriber. */
    email_address?: string | undefined;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    email_id?: string | undefined;
    /** The unique id for the list. */
    list_id?: string | undefined;
    /** The status of the list used, namely if it's deleted or disabled. */
    list_is_active?: boolean | undefined;
}

export namespace EmailActivity {
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

    export type Activity = Activity.Item[];

    export namespace Activity {
        /**
         * A summary of the interaction with the campaign.
         */
        export interface Item {
            /** One of the following actions: 'open', 'click', or 'bounce' */
            action?: string | undefined;
            /** The IP address recorded for the action. */
            ip?: string | undefined;
            /** The date and time recorded for the action in ISO 8601 format. */
            timestamp?: string | undefined;
            /** If the action is a 'bounce', the type of bounce received: 'hard', 'soft'. */
            type?: string | undefined;
            /** If the action is a 'click', the URL on which the member clicked. */
            url?: string | undefined;
        }
    }
}

//  This file was auto-generated from our API Definition.

/**
 * A list of a member's opens activity in a specific campaign.
 */
export interface OpenActivity {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: OpenActivity.Links.Item[] | undefined;
    /** The unique id for the campaign. */
    campaign_id?: string | undefined;
    /** The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation. */
    contact_status?: string | undefined;
    /** Email address for a subscriber. */
    email_address?: string | undefined;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    email_id?: string | undefined;
    /** The unique id for the list. */
    list_id?: string | undefined;
    /** The status of the list used, namely if it's deleted or disabled. */
    list_is_active?: boolean | undefined;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    merge_fields?: Record<string, OpenActivity.MergeFields.Value> | undefined;
    /** An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event. */
    opens?: OpenActivity.Opens.Item[] | undefined;
    /** The total number of times the this campaign was opened by the list member. */
    opens_count?: number | undefined;
    /** The total number of times the this campaign was opened by the list member excluding opens from email clients that use proxies . */
    proxy_excluded_opens_count?: number | undefined;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean | undefined;
}

export namespace OpenActivity {
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

    export namespace MergeFields {
        /**
         * This object's keys are merge tags (like FNAME). It's values are the values to be added to the merge field.
         */
        export type Value =
            | {
                  addr1: string;
                  addr2?: string | undefined;
                  city: string;
                  state: string;
                  zip: string;
                  country?: string | undefined;
              }
            | string
            | number;
    }

    export type Opens = Opens.Item[];

    export namespace Opens {
        /**
         * A summary of the interaction with the campaign.
         */
        export interface Item {
            /** Indicates if the open was from an email client that use proxies. */
            is_proxy_open?: boolean | undefined;
            /** The date and time recorded for the action in ISO 8601 format. */
            timestamp?: string | undefined;
        }
    }
}

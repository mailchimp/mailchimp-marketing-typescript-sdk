//  This file was auto-generated from our API Definition.

/**
 * A subscriber's status for a specific campaign.
 */
export interface SentTo {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: SentTo.Links.Item[] | undefined;
    /** For A/B Split Campaigns, the group the member was apart of. */
    absplit_group?: SentTo.AbsplitGroup | undefined;
    /** The campaign id. */
    campaign_id?: string | undefined;
    /** Email address for a subscriber. */
    email_address?: string | undefined;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    email_id?: string | undefined;
    /** For campaigns sent with timewarp, the time zone group the member is apart of. */
    gmt_offset?: number | undefined;
    /** The date and time of the last open for this member in ISO 8601 format. */
    last_open?: string | undefined;
    /** The unique list id. */
    list_id?: string | undefined;
    /** The status of the list used, namely if it's deleted or disabled. */
    list_is_active?: boolean | undefined;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    merge_fields?: Record<string, SentTo.MergeFields.Value> | undefined;
    /** The number of times a campaign was opened by this member. */
    open_count?: number | undefined;
    /** The status of the email delivered to this subscriber. `hard` and `soft` refer to different [bounce types](https://mailchimp.com/help/soft-vs-hard-bounces/). */
    status?: SentTo.Status | undefined;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean | undefined;
}

export namespace SentTo {
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

    /** For A/B Split Campaigns, the group the member was apart of. */
    export const AbsplitGroup = {
        A: "a",
        B: "b",
        Winner: "winner",
    } as const;
    export type AbsplitGroup = (typeof AbsplitGroup)[keyof typeof AbsplitGroup];

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

    /** The status of the email delivered to this subscriber. `hard` and `soft` refer to different [bounce types](https://mailchimp.com/help/soft-vs-hard-bounces/). */
    export const Status = {
        Sent: "sent",
        Hard: "hard",
        Soft: "soft",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}

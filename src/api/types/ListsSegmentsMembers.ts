//  This file was auto-generated from our API Definition.

/**
 * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
 */
export interface ListsSegmentsMembers {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListsSegmentsMembers.Links.Item[] | undefined;
    /** Email address for a subscriber. */
    email_address?: string | undefined;
    /** The list member's email client. */
    email_client?: string | undefined;
    /** Type of email this member asked to get ('html' or 'text'). */
    email_type?: string | undefined;
    /** The contact's full name. */
    full_name?: string | undefined;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    id?: string | undefined;
    /** The key of this object's properties is the ID of the interest in question. */
    interests?: Record<string, boolean> | undefined;
    /** The IP address the subscriber used to confirm their opt-in status. */
    ip_opt?: string | undefined;
    /** IP address the subscriber signed up from. */
    ip_signup?: string | undefined;
    /** If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/). */
    language?: string | undefined;
    /** The date and time the member's info was last changed in ISO 8601 format. */
    last_changed?: string | undefined;
    /** The most recent Note added about this member. */
    last_note?: ListsSegmentsMembers.LastNote | undefined;
    /** The list id. */
    list_id?: string | undefined;
    /** Subscriber location information. */
    location?: ListsSegmentsMembers.Location | undefined;
    /** Star rating for this member, between 1 and 5. */
    member_rating?: number | undefined;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    merge_fields?: Record<string, ListsSegmentsMembers.MergeFields.Value> | undefined;
    /** Open and click rates for this subscriber. */
    stats?: ListsSegmentsMembers.Stats | undefined;
    /** Subscriber's current status. */
    status?: ListsSegmentsMembers.Status | undefined;
    /** The date and time the subscriber confirmed their opt-in status in ISO 8601 format. */
    timestamp_opt?: string | undefined;
    /** The date and time the subscriber signed up for the list in ISO 8601 format. */
    timestamp_signup?: string | undefined;
    /** An identifier for the address across all of Mailchimp. */
    unique_email_id?: string | undefined;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean | undefined;
}

export namespace ListsSegmentsMembers {
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

    /**
     * The most recent Note added about this member.
     */
    export interface LastNote {
        /** The date and time the note was created in ISO 8601 format. */
        created_at?: string | undefined;
        /** The author of the note. */
        created_by?: string | undefined;
        /** The content of the note. */
        note?: string | undefined;
        /** The note id. */
        note_id?: number | undefined;
    }

    /**
     * Subscriber location information.
     */
    export interface Location {
        /** The unique code for the location country. */
        country_code?: string | undefined;
        /** The offset for timezones where daylight saving time is observed. */
        dstoff?: number | undefined;
        /** The time difference in hours from GMT. */
        gmtoff?: number | undefined;
        /** The location latitude. */
        latitude?: number | undefined;
        /** The location longitude. */
        longitude?: number | undefined;
        /** The timezone for the location. */
        timezone?: string | undefined;
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

    /**
     * Open and click rates for this subscriber.
     */
    export interface Stats {
        /** A subscriber's average clickthrough rate. */
        avg_click_rate?: number | undefined;
        /** A subscriber's average open rate. */
        avg_open_rate?: number | undefined;
    }

    /** Subscriber's current status. */
    export const Status = {
        Subscribed: "subscribed",
        Unsubscribed: "unsubscribed",
        Cleaned: "cleaned",
        Pending: "pending",
        Transactional: "transactional",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}

//  This file was auto-generated from our API Definition.

/**
 * Information about a specific list.
 */
export interface SubscriberList {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: SubscriberList.Links.Item[] | undefined;
    /** The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address. */
    beamer_address?: string | undefined;
    /** [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list. */
    campaign_defaults?: SubscriberList.CampaignDefaults | undefined;
    /** [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws. */
    contact?: SubscriberList.Contact | undefined;
    /** The date and time that this list was created in ISO 8601 format. */
    date_created?: string | undefined;
    /** Whether or not to require the subscriber to confirm subscription via email. */
    double_optin?: boolean | undefined;
    /** Whether the list supports [multiple formats for emails](https://mailchimp.com/help/audience-settings-and-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup. */
    email_type_option?: boolean | undefined;
    /** Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup. */
    has_welcome?: boolean | undefined;
    /** A string that uniquely identifies this list. */
    id?: string | undefined;
    /** An auto-generated activity score for the list (0-5). */
    list_rating?: number | undefined;
    /** Whether or not the list has marketing permissions (eg. GDPR) enabled. */
    marketing_permissions?: boolean | undefined;
    /** Any list-specific modules installed for this list. */
    modules?: string[] | undefined;
    /** The name of the list. */
    name?: string | undefined;
    /** The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notify_on_subscribe?: string | undefined;
    /** The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notify_on_unsubscribe?: string | undefined;
    /** The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list. */
    permission_reminder?: string | undefined;
    /** Stats for the list. Many of these are cached for at least five minutes. */
    stats?: SubscriberList.Stats | undefined;
    /** The full version of this list's subscribe form (host will vary). */
    subscribe_url_long?: string | undefined;
    /** Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form. */
    subscribe_url_short?: string | undefined;
    /** Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default. */
    use_archive_bar?: boolean | undefined;
    /** Legacy - visibility settings are no longer used */
    visibility?: SubscriberList.Visibility | undefined;
    /** The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`. */
    web_id?: number | undefined;
}

export namespace SubscriberList {
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
     * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
     */
    export interface CampaignDefaults {
        /** The default from email for campaigns sent to this list. */
        from_email?: string | undefined;
        /** The default from name for campaigns sent to this list. */
        from_name?: string | undefined;
        /** The default language for this lists's forms. */
        language?: string | undefined;
        /** The default subject line for campaigns sent to this list. */
        subject?: string | undefined;
    }

    /**
     * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
     */
    export interface Contact {
        /** The street address for the list contact. */
        address1?: string | undefined;
        /** The street address for the list contact. */
        address2?: string | undefined;
        /** The city for the list contact. */
        city?: string | undefined;
        /** The company name for the list. */
        company?: string | undefined;
        /** A two-character ISO3166 country code. Defaults to US if invalid. */
        country?: string | undefined;
        /** The phone number for the list contact. */
        phone?: string | undefined;
        /** The state for the list contact. */
        state?: string | undefined;
        /** The postal or zip code for the list contact. */
        zip?: string | undefined;
    }

    /**
     * Stats for the list. Many of these are cached for at least five minutes.
     */
    export interface Stats {
        /** The average number of subscriptions per month for the list (not returned if we haven't calculated it yet). */
        avg_sub_rate?: number | undefined;
        /** The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet). */
        avg_unsub_rate?: number | undefined;
        /** The number of campaigns in any status that use this list. */
        campaign_count?: number | undefined;
        /** The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients. */
        campaign_last_sent?: string | undefined;
        /** The number of members cleaned from the list. */
        cleaned_count?: number | undefined;
        /** The number of members cleaned from the list since the last campaign was sent. */
        cleaned_count_since_send?: number | undefined;
        /** The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet). */
        click_rate?: number | undefined;
        /** The date and time of the last time someone subscribed to this list in ISO 8601 format. */
        last_sub_date?: string | undefined;
        /** The date and time of the last time someone unsubscribed from this list in ISO 8601 format. */
        last_unsub_date?: string | undefined;
        /** The number of active members in the list. */
        member_count?: number | undefined;
        /** The number of active members in the list since the last campaign was sent. */
        member_count_since_send?: number | undefined;
        /** The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL). */
        merge_field_count?: number | undefined;
        /** The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet). */
        open_rate?: number | undefined;
        /** The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet). */
        target_sub_rate?: number | undefined;
        /** An approximate count of subscribed, unsubscribed, and transactional contacts in the list. Does not include cleaned, archived, pending, or contacts that need to be reconfirmed. Requires the (deprecated) include_total_contacts query parameter to be included; for a complete audience contact count, use the /audiences endpoint instead. */
        total_contacts?: number | undefined;
        /** The number of members who have unsubscribed from the list. */
        unsubscribe_count?: number | undefined;
        /** The number of members who have unsubscribed since the last campaign was sent. */
        unsubscribe_count_since_send?: number | undefined;
    }

    /** Legacy - visibility settings are no longer used */
    export const Visibility = {
        Pub: "pub",
        Prv: "prv",
    } as const;
    export type Visibility = (typeof Visibility)[keyof typeof Visibility];
}

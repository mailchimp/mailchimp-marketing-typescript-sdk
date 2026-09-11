//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaign_defaults: {
 *             from_email: "from_email",
 *             from_name: "from_name",
 *             language: "language",
 *             subject: "subject"
 *         },
 *         contact: {
 *             address1: "address1",
 *             city: "city",
 *             company: "company",
 *             country: "country"
 *         },
 *         email_type_option: true,
 *         name: "name",
 *         permission_reminder: "permission_reminder"
 *     }
 */
export interface CreateListsRequest {
    /** [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list. */
    campaign_defaults: CreateListsRequest.CampaignDefaults;
    /** [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws. */
    contact: CreateListsRequest.Contact;
    /** Whether or not to require the subscriber to confirm subscription via email. */
    double_optin?: boolean;
    /** Whether the list supports [multiple formats for emails](https://mailchimp.com/help/audience-settings-and-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup. */
    email_type_option: boolean;
    /** Whether or not the list has marketing permissions (eg. GDPR) enabled. */
    marketing_permissions?: boolean;
    /** The name of the list. */
    name: string;
    /** The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notify_on_subscribe?: string;
    /** The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notify_on_unsubscribe?: string;
    /** The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list. */
    permission_reminder: string;
    /** Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default. */
    use_archive_bar?: boolean;
}

export namespace CreateListsRequest {
    /**
     * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
     */
    export interface CampaignDefaults {
        /** The default from email for campaigns sent to this list. */
        from_email: string;
        /** The default from name for campaigns sent to this list. */
        from_name: string;
        /** The default language for this lists's forms. */
        language: string;
        /** The default subject line for campaigns sent to this list. */
        subject: string;
    }

    /**
     * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
     */
    export interface Contact {
        /** The street address for the list contact. */
        address1: string;
        /** The street address for the list contact. */
        address2?: string | undefined;
        /** The city for the list contact. */
        city: string;
        /** The company name for the list. */
        company: string;
        /** A two-character ISO3166 country code. Defaults to US if invalid. */
        country: string;
        /** The phone number for the list contact. */
        phone?: string | undefined;
        /** The state for the list contact. */
        state?: string | undefined;
        /** The postal or zip code for the list contact. */
        zip?: string | undefined;
    }
}

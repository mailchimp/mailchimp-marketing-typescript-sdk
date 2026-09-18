//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific list.
 */
export interface SubscriberList {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SubscriberListLinksItem[];
    /** The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address. */
    beamerAddress?: string;
    /** [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list. */
    campaignDefaults?: Mailchimp.SubscriberListCampaignDefaults;
    /** [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws. */
    contact?: Mailchimp.SubscriberListContact;
    /** The date and time that this list was created in ISO 8601 format. */
    dateCreated?: Date;
    /** Whether or not to require the subscriber to confirm subscription via email. */
    doubleOptin?: boolean;
    /** Whether the list supports [multiple formats for emails](https://mailchimp.com/help/audience-settings-and-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup. */
    emailTypeOption?: boolean;
    /** Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup. */
    hasWelcome?: boolean;
    /** A string that uniquely identifies this list. */
    id?: string;
    /** An auto-generated activity score for the list (0-5). */
    listRating?: number;
    /** Whether or not the list has marketing permissions (eg. GDPR) enabled. */
    marketingPermissions?: boolean;
    /** Any list-specific modules installed for this list. */
    modules?: string[];
    /** The name of the list. */
    name?: string;
    /** The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notifyOnSubscribe?: string;
    /** The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notifyOnUnsubscribe?: string;
    /** The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list. */
    permissionReminder?: string;
    /** Stats for the list. Many of these are cached for at least five minutes. */
    stats?: Mailchimp.SubscriberListStats;
    /** The full version of this list's subscribe form (host will vary). */
    subscribeUrlLong?: string;
    /** Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form. */
    subscribeUrlShort?: string;
    /** Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default. */
    useArchiveBar?: boolean;
    /** Legacy - visibility settings are no longer used */
    visibility?: Mailchimp.SubscriberListVisibility;
    /** The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`. */
    webId?: number;
}

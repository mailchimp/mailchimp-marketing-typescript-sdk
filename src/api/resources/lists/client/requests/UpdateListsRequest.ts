//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id"
 *     }
 */
export interface UpdateListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list. */
    campaignDefaults?: Mailchimp.UpdateListsRequestCampaignDefaults;
    /** [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws. */
    contact?: Mailchimp.UpdateListsRequestContact;
    /** Whether or not to require the subscriber to confirm subscription via email. */
    doubleOptin?: boolean;
    /** Whether the list supports [multiple formats for emails](https://mailchimp.com/help/audience-settings-and-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup. */
    emailTypeOption?: boolean;
    /** Whether or not the list has marketing permissions (eg. GDPR) enabled. */
    marketingPermissions?: boolean;
    /** The name of the list. */
    name?: string;
    /** The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notifyOnSubscribe?: string;
    /** The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to. */
    notifyOnUnsubscribe?: string;
    /** The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list. */
    permissionReminder?: string;
    /** Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default. */
    useArchiveBar?: boolean;
}

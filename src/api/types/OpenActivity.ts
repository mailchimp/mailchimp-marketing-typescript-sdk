//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A list of a member's opens activity in a specific campaign.
 */
export interface OpenActivity {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.OpenActivityLinksItem[];
    /** The unique id for the campaign. */
    campaignId?: string;
    /** The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation. */
    contactStatus?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The unique id for the list. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.OpenActivityMergeFieldsValue>;
    /** An array of timestamps for each time a list member opened the campaign. If a list member opens an email multiple times, this will return a separate timestamp for each open event. */
    opens?: Mailchimp.OpenActivityOpensItem[];
    /** The total number of times the this campaign was opened by the list member. */
    opensCount?: number;
    /** The total number of times the this campaign was opened by the list member excluding opens from email clients that use proxies . */
    proxyExcludedOpensCount?: number;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}

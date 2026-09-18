//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A member who unsubscribed from a specific campaign.
 */
export interface Unsubscribes {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.UnsubscribesLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.UnsubscribesMergeFieldsValue>;
    /** If available, the reason listed by the member for unsubscribing. */
    reason?: string;
    /** The date and time the member opted-out in ISO 8601 format. */
    timestamp?: Date;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}

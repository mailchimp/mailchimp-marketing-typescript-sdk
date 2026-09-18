//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A subscriber's status for a specific campaign.
 */
export interface SentTo {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SentToLinksItem[];
    /** For A/B Split Campaigns, the group the member was apart of. */
    absplitGroup?: Mailchimp.SentToAbsplitGroup;
    /** The campaign id. */
    campaignId?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** For campaigns sent with timewarp, the time zone group the member is apart of. */
    gmtOffset?: number;
    /** The date and time of the last open for this member in ISO 8601 format. */
    lastOpen?: Date;
    /** The unique list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.SentToMergeFieldsValue>;
    /** The number of times a campaign was opened by this member. */
    openCount?: number;
    /** The status of the email delivered to this subscriber. `hard` and `soft` refer to different [bounce types](https://mailchimp.com/help/soft-vs-hard-bounces/). */
    status?: Mailchimp.SentToStatus;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}

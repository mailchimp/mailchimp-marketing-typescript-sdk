//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A subscriber who clicked a specific URL in a specific campaign.
 */
export interface ClickDetailMember {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ClickDetailMemberLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** The total number of times the subscriber clicked on the link. */
    clicks?: number;
    /** The status of the member, namely if they are subscribed, unsubscribed, deleted, non-subscribed, transactional, pending, or need reconfirmation. */
    contactStatus?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.ClickDetailMemberMergeFieldsValue>;
    /** The id for the tracked URL in the campaign. */
    urlId?: string;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}

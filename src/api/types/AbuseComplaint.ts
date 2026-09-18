//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to 'report spam' in their email program.
 */
export interface AbuseComplaint {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.AbuseComplaintLinksItem[];
    /** The campaign id for the abuse report */
    campaignId?: string;
    /** Date for the abuse report */
    date?: Date;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The id for the abuse report */
    id?: number;
    /** The unique id of the list for the abuse report. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.AbuseComplaintMergeFieldsValue>;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}

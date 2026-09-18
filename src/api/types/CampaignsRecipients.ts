//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * List settings for the campaign.
 */
export interface CampaignsRecipients {
    /** The unique list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** The name of the list. */
    listName?: string;
    /** Count of the recipients on the associated list. Formatted as an integer. */
    recipientCount?: number;
    /** An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options. */
    segmentOpts?: Mailchimp.CampaignsRecipientsSegmentOpts;
    /** A description of the [segment](https://mailchimp.com/help/create-and-send-to-a-segment/) used for the campaign. Formatted as a string marked up with HTML. */
    segmentText?: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * List settings for the campaign.
 */
export interface CreateCampaignsRequestRecipients {
    /** The unique list id. */
    listId: string;
    /** An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options. */
    segmentOpts?: Mailchimp.CreateCampaignsRequestRecipientsSegmentOpts;
}

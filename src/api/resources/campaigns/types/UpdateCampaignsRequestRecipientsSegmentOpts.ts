//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
 */
export interface UpdateCampaignsRequestRecipientsSegmentOpts {
    conditions?: Mailchimp.SegmentType;
    /** Segment match type. */
    match?: Mailchimp.UpdateCampaignsRequestRecipientsSegmentOptsMatch;
    /** The prebuilt segment id, if a prebuilt segment has been designated for this campaign. */
    prebuiltSegmentId?: string;
    /** The id for an existing saved segment. */
    savedSegmentId?: Mailchimp.UpdateCampaignsRequestRecipientsSegmentOptsSavedSegmentId;
}

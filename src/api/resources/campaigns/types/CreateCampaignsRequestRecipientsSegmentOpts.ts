//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
 */
export interface CreateCampaignsRequestRecipientsSegmentOpts {
    conditions?: Mailchimp.SegmentType;
    /** Segment match type. */
    match?: Mailchimp.CreateCampaignsRequestRecipientsSegmentOptsMatch;
    /** The id for an existing saved segment. */
    savedSegmentId?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by poll activity.
 */
export interface SegmentTypeItemCampaignPoll {
    /** Segment by poll activity. */
    field: Mailchimp.SegmentTypeItemCampaignPollField;
    /** Members have/have not interacted with a specific poll in a Mailchimp email. */
    op: Mailchimp.SegmentTypeItemCampaignPollOp;
    /** The id for the poll. */
    value: number;
}

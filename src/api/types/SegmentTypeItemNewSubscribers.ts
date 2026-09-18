//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by when people subscribed.
 */
export interface SegmentTypeItemNewSubscribers {
    /** Segment by when people subscribed. */
    field?: Mailchimp.SegmentTypeItemNewSubscribersField;
    /** Whe the event took place, namely within a time frame. */
    op?: Mailchimp.SegmentTypeItemNewSubscribersOp;
    /** What type of data to segment on: a specific date, a specific campaign, or the last campaign sent. */
    value?: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by most recent interaction with a website.
 */
export interface SegmentTypeItemGoalTimestamp {
    /** Segment by most recent interaction with a website. */
    field: Mailchimp.SegmentTypeItemGoalTimestampField;
    /** Whether the website activity happened after, before, or at a given timestamp. */
    op: Mailchimp.SegmentTypeItemGoalTimestampOp;
    /** The date to check Goal activity against. */
    value: string;
}

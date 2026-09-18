//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by Goal activity.
 */
export interface SegmentTypeItemGoalActivity {
    /** Segment by Goal activity. */
    field: Mailchimp.SegmentTypeItemGoalActivityField;
    /** Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string. */
    op: Mailchimp.SegmentTypeItemGoalActivityOp;
    /** The URL to check Goal activity against. */
    value: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by similar subscribers.
 */
export interface SegmentTypeItemFuzzySegment {
    /** Segment by similar subscribers. */
    field: Mailchimp.SegmentTypeItemFuzzySegmentField;
    /** Members who are/are not apart of a 'similar subscribers' segment. */
    op: Mailchimp.SegmentTypeItemFuzzySegmentOp;
    value: Mailchimp.SegmentTypeItemFuzzySegmentValue;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by predicted age.
 */
export interface SegmentTypeItemPredictedAge {
    /** Segment by predicted age. */
    field: Mailchimp.SegmentTypeItemPredictedAgeField;
    /** Members who are/not the exact criteria listed. */
    op: Mailchimp.SegmentTypeItemPredictedAgeOp;
    /** The predicted age to segment. */
    value: Mailchimp.SegmentTypeItemPredictedAgeValue;
}

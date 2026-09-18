//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by predicted gender.
 */
export interface SegmentTypeItemPredictedGender {
    /** Segment by predicted gender. */
    field: Mailchimp.SegmentTypeItemPredictedGenderField;
    /** Members who are/not the exact criteria listed. */
    op: Mailchimp.SegmentTypeItemPredictedGenderOp;
    /** The predicted gender to segment. */
    value: Mailchimp.SegmentTypeItemPredictedGenderValue;
}

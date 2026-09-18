//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by age ranges in Social Profiles data.
 */
export interface SegmentTypeItemSocialAge {
    /** Segment by age ranges in Social Profiles data. */
    field: Mailchimp.SegmentTypeItemSocialAgeField;
    /** Members who are/not the exact criteria listed. */
    op: Mailchimp.SegmentTypeItemSocialAgeOp;
    /** The age range to segment. */
    value: Mailchimp.SegmentTypeItemSocialAgeValue;
}

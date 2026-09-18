//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by listed gender in Social Profiles data.
 */
export interface SegmentTypeItemSocialGender {
    /** Segment by listed gender in Social Profiles data. */
    field: Mailchimp.SegmentTypeItemSocialGenderField;
    /** Members who are/not the exact criteria listed. */
    op: Mailchimp.SegmentTypeItemSocialGenderOp;
    /** The Social Profiles gender to segment. */
    value: Mailchimp.SegmentTypeItemSocialGenderValue;
}

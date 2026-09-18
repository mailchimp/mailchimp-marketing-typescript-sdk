//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by influence rating in Social Profiles data.
 */
export interface SegmentTypeItemSocialInfluence {
    /** Segment by influence rating in Social Profiles data. */
    field: Mailchimp.SegmentTypeItemSocialInfluenceField;
    /** Members who have a rating that is/not or greater/less than the rating provided. */
    op: Mailchimp.SegmentTypeItemSocialInfluenceOp;
    /** The Social Profiles influence rating to segment. */
    value: number;
}

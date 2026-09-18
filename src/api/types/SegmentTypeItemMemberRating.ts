//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by member rating.
 */
export interface SegmentTypeItemMemberRating {
    /** Segment by member rating. */
    field: Mailchimp.SegmentTypeItemMemberRatingField;
    /** Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number. */
    op: Mailchimp.SegmentTypeItemMemberRatingOp;
    value: Mailchimp.SegmentTypeItemMemberRatingValue;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a contact's birthday.
 */
export interface SegmentTypeItemBirthdayMerge {
    /** A date merge field to segment. */
    field: string;
    /** Whether the member's birthday merge information is/is not a certain date or is/is not blank. */
    op: Mailchimp.SegmentTypeItemBirthdayMergeOp;
    /** A date to segment against (mm/dd). */
    value?: string;
}

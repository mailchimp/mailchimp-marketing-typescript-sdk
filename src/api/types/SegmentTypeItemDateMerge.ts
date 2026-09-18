//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a given date merge field.
 */
export interface SegmentTypeItemDateMerge {
    /** A date merge field to segment. */
    field: string;
    /** Whether the member's merge information is/is not, is greater/less than a value or is/is not blank. */
    op: Mailchimp.SegmentTypeItemDateMergeOp;
    /** A date to segment against. */
    value?: string;
}

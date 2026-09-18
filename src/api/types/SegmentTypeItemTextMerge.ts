//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a given text or number merge field.
 */
export interface SegmentTypeItemTextMerge {
    /** A text or number merge field to segment. */
    field: string;
    /** Whether the member's merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value */
    op: Mailchimp.SegmentTypeItemTextMergeOp;
    /** The value to segment a text or number merge field with. */
    value?: string;
}

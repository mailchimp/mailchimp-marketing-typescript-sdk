//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * An individual segment condition
 */
export interface SegmentTypeItemSelectMerge {
    /** A merge field to segment. */
    field: string;
    /** Whether the member's merge information is/is not a value or is/is not blank. */
    op: Mailchimp.SegmentTypeItemSelectMergeOp;
    /** The value to segment a text merge field with. */
    value?: string;
}

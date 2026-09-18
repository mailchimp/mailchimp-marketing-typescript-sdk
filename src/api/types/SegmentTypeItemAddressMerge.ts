//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by an address-type merge field.
 */
export interface SegmentTypeItemAddressMerge {
    /** An address-type merge field to segment. */
    field: string;
    /** Whether the member's address merge field contains/does not contain a value or is/is not blank. */
    op: Mailchimp.SegmentTypeItemAddressMergeOp;
    /** The value to segment a text merge field with. */
    value?: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by signup source.
 */
export interface SegmentTypeItemSignupSource {
    field: Mailchimp.SegmentTypeItemSignupSourceField;
    /** Whether the member's signup source was/was not a particular value. */
    op: Mailchimp.SegmentTypeItemSignupSourceOp;
    /** The signup source. */
    value?: string;
}

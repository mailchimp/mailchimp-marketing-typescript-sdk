//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a given static segment.
 */
export interface SegmentTypeItemStaticSegment {
    /** Segment by a given static segment. */
    field: Mailchimp.SegmentTypeItemStaticSegmentField;
    /** Members who are/are not apart of a static segment. */
    op: Mailchimp.SegmentTypeItemStaticSegmentOp;
    value: Mailchimp.SegmentTypeItemStaticSegmentValue;
}

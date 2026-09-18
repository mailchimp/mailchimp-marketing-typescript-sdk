//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by an address-type merge field within a given distance.
 */
export interface SegmentTypeItemZipMerge {
    /** The city or the zip being used to segment against. */
    extra: string;
    /** An address or zip-type merge field to segment. */
    field: string;
    /** Whether the member's address merge field is within a given distance from a city or zip. */
    op: Mailchimp.SegmentTypeItemZipMergeOp;
    /** The distance from the city/zip. */
    value: string;
}

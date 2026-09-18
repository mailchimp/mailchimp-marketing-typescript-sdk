//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a specific US ZIP code.
 */
export interface SegmentTypeItemIpGeoInZip {
    /** The zip code to segment against. */
    extra: number;
    /** Segmenting subscribers who are within a specific location. */
    field: Mailchimp.SegmentTypeItemIpGeoInZipField;
    /** Segment members who are within a specific US zip code. */
    op: Mailchimp.SegmentTypeItemIpGeoInZipOp;
    /** The radius of the target location. */
    value: number;
}

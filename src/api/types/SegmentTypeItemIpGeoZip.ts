//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a specific US ZIP code.
 */
export interface SegmentTypeItemIpGeoZip {
    /** Segmenting subscribers who are within a specific location. */
    field: Mailchimp.SegmentTypeItemIpGeoZipField;
    /** Segment members who are/are not within a specific US zip code. */
    op: Mailchimp.SegmentTypeItemIpGeoZipOp;
    /** The 5-digit zip code. */
    value: number;
}

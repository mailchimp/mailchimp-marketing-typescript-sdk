//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a specific geographic region.
 */
export interface SegmentTypeItemIpGeoIn {
    /** The address of the target location. */
    addr: string;
    /** Segmenting subscribers who are within a specific location. */
    field: Mailchimp.SegmentTypeItemIpGeoInField;
    /** The latitude of the target location. */
    lat: string;
    /** The longitude of the target location. */
    lng: string;
    /** Segment members who are within a specific geographic region. */
    op: Mailchimp.SegmentTypeItemIpGeoInOp;
    /** The radius of the target location. */
    value: number;
}

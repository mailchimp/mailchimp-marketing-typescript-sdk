//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by a specific country or US state.
 */
export interface SegmentTypeItemIpGeoCountryState {
    /** Segmenting subscribers who are within a specific location. */
    field: Mailchimp.SegmentTypeItemIpGeoCountryStateField;
    /** Segment members who are within a specific country or US state. */
    op: Mailchimp.SegmentTypeItemIpGeoCountryStateOp;
    /** The two-letter country code or US state abbreviation. */
    value: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by email address.
 */
export interface SegmentTypeItemEmailAddress {
    /** Segmenting based off of a subscriber's email address. */
    field: Mailchimp.SegmentTypeItemEmailAddressField;
    /** Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string. */
    op: Mailchimp.SegmentTypeItemEmailAddressOp;
    /** The value to compare the email against. */
    value?: string;
}

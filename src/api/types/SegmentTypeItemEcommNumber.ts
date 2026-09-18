//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order.
 */
export interface SegmentTypeItemEcommNumber {
    /** Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. */
    field: Mailchimp.SegmentTypeItemEcommNumberField;
    /** Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value. */
    op: Mailchimp.SegmentTypeItemEcommNumberOp;
    value: Mailchimp.SegmentTypeItemEcommNumberValue;
}

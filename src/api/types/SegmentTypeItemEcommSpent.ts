//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by amount spent on a single order or across all orders.
 */
export interface SegmentTypeItemEcommSpent {
    /** Segment by amount spent on a single order or across all orders. */
    field?: Mailchimp.SegmentTypeItemEcommSpentField;
    /** Members who have spent 'more' or 'less' than then specified value. */
    op?: Mailchimp.SegmentTypeItemEcommSpentOp;
    value?: Mailchimp.SegmentTypeItemEcommSpentValue;
}

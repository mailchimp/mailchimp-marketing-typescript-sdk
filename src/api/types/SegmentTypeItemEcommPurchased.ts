//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by whether someone has purchased anything.
 */
export interface SegmentTypeItemEcommPurchased {
    /** Segment by whether someone has purchased anything. */
    field?: Mailchimp.SegmentTypeItemEcommPurchasedField;
    /** Members who have have ('member') or have not ('notmember') purchased. */
    op?: Mailchimp.SegmentTypeItemEcommPurchasedOp;
}

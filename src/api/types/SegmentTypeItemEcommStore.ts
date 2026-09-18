//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by purchases from a specific store.
 */
export interface SegmentTypeItemEcommStore {
    /** Segment by purchases from a specific store. */
    field?: Mailchimp.SegmentTypeItemEcommStoreField;
    /** Members who have or have not purchased from a specific store. */
    op?: Mailchimp.SegmentTypeItemEcommStoreOp;
    /** The store id to segment against. */
    value?: string;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by purchases in specific items or categories.
 */
export interface SegmentTypeItemEcommCategory {
    /** Segment by purchases in specific items or categories. */
    field?: Mailchimp.SegmentTypeItemEcommCategoryField;
    /** A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string. */
    op?: Mailchimp.SegmentTypeItemEcommCategoryOp;
    /** The ecommerce category/item information. */
    value?: string;
}

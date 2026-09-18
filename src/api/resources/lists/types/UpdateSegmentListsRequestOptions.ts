//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The [conditions of the segment](https://mailchimp.com/help/save-and-manage-segments/). Static and fuzzy segments don't have conditions.
 */
export interface UpdateSegmentListsRequestOptions {
    conditions?: Mailchimp.SegmentType;
    /** Match type. */
    match?: Mailchimp.UpdateSegmentListsRequestOptionsMatch;
}

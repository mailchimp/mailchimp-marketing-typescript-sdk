//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
 */
export interface ListOptions {
    conditions?: Mailchimp.SegmentType;
    /** Match type. */
    match?: Mailchimp.ListOptionsMatch;
}

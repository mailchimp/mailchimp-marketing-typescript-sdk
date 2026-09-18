//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by language.
 */
export interface SegmentTypeItemLanguage {
    /** Segmenting based off of a subscriber's language. */
    field: Mailchimp.SegmentTypeItemLanguageField;
    /** Whether the member's language is or is not set to a specific language. */
    op: Mailchimp.SegmentTypeItemLanguageOp;
    /** A two-letter language identifier. */
    value: string;
}

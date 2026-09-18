//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by an interest group merge field.
 */
export interface SegmentTypeItemInterests {
    /** Segmenting based on interest group information. This should start with 'interests-' followed by the grouping id. Ex. 'interests-123'. */
    field?: string;
    /** Whether the member is a part of one, all, or none of the groups. */
    op?: Mailchimp.SegmentTypeItemInterestsOp;
    /** An array containing strings, each representing a group id. */
    value?: string[];
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         segmentId: "segment_id"
 *     }
 */
export interface UpdateSegmentListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique id for the segment. */
    segmentId: string;
    /** The name of the segment. */
    name?: string;
    /** The [conditions of the segment](https://mailchimp.com/help/save-and-manage-segments/). Static and fuzzy segments don't have conditions. */
    options?: Mailchimp.UpdateSegmentListsRequestOptions;
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array for an existing static segment will reset that segment and remove all members. This field cannot be provided with the `options` field. */
    staticSegment?: string[];
}

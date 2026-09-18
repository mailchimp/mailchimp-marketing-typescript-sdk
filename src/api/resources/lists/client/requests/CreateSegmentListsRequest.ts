//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         name: "name"
 *     }
 */
export interface CreateSegmentListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The name of the segment. */
    name: string;
    /** The [conditions of the segment](https://mailchimp.com/help/save-and-manage-segments/). Static and fuzzy segments don't have conditions. */
    options?: Mailchimp.CreateSegmentListsRequestOptions;
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field. */
    staticSegment?: string[];
}

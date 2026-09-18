//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of batch requests that have been made.
 */
export interface ListBatchesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListBatchesResponseLinksItem[];
    /** An array of objects representing batch calls. */
    batches?: Mailchimp.Batch[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

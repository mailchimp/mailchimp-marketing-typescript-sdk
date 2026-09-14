//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaign_id: "campaign_id"
 *     }
 */
export interface ListClickDetailsReportsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** Returns click reports sorted by the specified field. */
    sort_field?: Mailchimp.ListClickDetailsReportsRequestSortField;
    /** Determines the order direction for sorted results. */
    sort_dir?: Mailchimp.ListClickDetailsReportsRequestSortDir;
    /** When true, exclude automated bot clicks so the returned click counts reflect human clicks only, matching the in-app Recipient Activity view. Filtering changes a link's counts, but never removes a link from the response. Defaults to false (all clicks). */
    filter_bots?: boolean;
}

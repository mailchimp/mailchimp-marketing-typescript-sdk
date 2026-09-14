//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaign_id: "campaign_id",
 *         since: "2016-04-12 12:00:00"
 *     }
 */
export interface ListOpenDetailsReportsRequest {
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
    /** Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    since?: string;
    /** Returns open reports sorted by the specified field. */
    sort_field?: Mailchimp.ListOpenDetailsReportsRequestSortField;
    /** Determines the order direction for sorted results. */
    sort_dir?: Mailchimp.ListOpenDetailsReportsRequestSortDir;
    /** When true, exclude automated (proxy/bot) opens so the returned open counts reflect human opens only, matching the in-app Recipient Activity view. A member whose opens are all automated is excluded from the human-only view. Defaults to false (all opens). */
    filter_bots?: boolean;
}

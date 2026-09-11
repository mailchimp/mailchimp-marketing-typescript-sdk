//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListListsRequest {
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    before_date_created?: string;
    /** Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    since_date_created?: string;
    /** Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    before_campaign_last_sent?: string;
    /** Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    since_campaign_last_sent?: string;
    /** Restrict results to lists that include a specific subscriber's email address. */
    email?: string;
    /** Returns files sorted by the specified field. */
    sort_field?: Mailchimp.ListListsRequestSortField;
    /** Determines the order direction for sorted results. */
    sort_dir?: Mailchimp.ListListsRequestSortDir;
    /** Restrict results to lists that contain an active, connected, undeleted ecommerce store. */
    has_ecommerce_store?: boolean;
    /** Deprecated. Return the total_contacts field in the stats response, which contains an approximate count of subscribed, unsubscribed, and transactional contacts. For a complete audience contact count, use the /audiences endpoint instead. */
    include_total_contacts?: boolean;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id"
 *     }
 */
export interface ListMembersListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** The email type. */
    email_type?: string;
    /** The subscriber's status. */
    status?: Mailchimp.ListMembersListsRequestStatus;
    /** Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    since_timestamp_opt?: string;
    /** Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    before_timestamp_opt?: string;
    /** Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    since_last_changed?: string;
    /** Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    before_last_changed?: string;
    /** A unique identifier for the email address across all Mailchimp lists. */
    unique_email_id?: string;
    /** A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members. */
    vip_only?: boolean;
    /** The unique id for the interest category. */
    interest_category_id?: string;
    /** Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories. */
    interest_ids?: string;
    /** Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. "any" will match a member with any of the interest supplied, "all" will only match members with every interest supplied, and "none" will match members without any of the interest supplied. */
    interest_match?: Mailchimp.ListMembersListsRequestInterestMatch;
    /** Returns files sorted by the specified field. */
    sort_field?: Mailchimp.ListMembersListsRequestSortField;
    /** Determines the order direction for sorted results. */
    sort_dir?: Mailchimp.ListMembersListsRequestSortDir;
    /** Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter. */
    since_last_campaign?: boolean;
    /** Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error. */
    unsubscribed_since?: string;
}

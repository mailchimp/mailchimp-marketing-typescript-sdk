//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id"
 *     }
 */
export interface ListSegmentsListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** Limit results based on segment type. */
    type?: string;
    /** Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceCreatedAt?: string;
    /** Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeCreatedAt?: string;
    /** Include cleaned members in response */
    includeCleaned?: boolean;
    /** Include transactional members in response */
    includeTransactional?: boolean;
    /** Include unsubscribed members in response */
    includeUnsubscribed?: boolean;
    /** Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceUpdatedAt?: string;
    /** Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeUpdatedAt?: string;
    /** Exclude results based on segment type. For example, use `exclude_type=static` to exclude tags from the response. */
    excludeType?: Mailchimp.ListSegmentsListsRequestExcludeType;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         audienceId: "audience_id"
 *     }
 */
export interface GetAudienceContactListRequest {
    /** The unique ID for the audience. */
    audienceId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Paginate through a collection of records by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request. Default value fetches the first "page" of results. */
    cursor?: string;
    /** Restricts the response to contacts created at or before the specified time (inclusive). Uses ISO 8601 format: 2025-04-23T15:41:36+00:00. */
    createdBefore?: Date;
    /** Restricts the response to contacts created after the specified time (exclusive). Uses ISO 8601 format: 2025-04-23T15:41:36+00:00. */
    createdSince?: Date;
    /** Restricts the response to contacts updated at or before the specified time (inclusive). Uses ISO 8601 format: 2025-04-23T15:41:36+00:00. */
    updatedBefore?: Date;
    /** Restricts the response to contacts updated after the specified time (exclusive). Uses ISO 8601 format: 2025-04-23T15:41:36+00:00. */
    updatedSince?: Date;
    /** Specifies the field to sort the returned contacts by. */
    sortField?: Mailchimp.GetAudienceContactListRequestSortField;
    /** Determines the order direction for sorted results. */
    sortDir?: Mailchimp.GetAudienceContactListRequestSortDir;
}

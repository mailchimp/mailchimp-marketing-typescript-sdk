//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface ListMemberActivityFeedListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriberHash: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** A comma-separated list of activity filters that correspond to a set of activity types, e.g "?activity_filters=open,bounce,click". */
    activityFilters?:
        | Mailchimp.ListMemberActivityFeedListsRequestActivityFiltersItem
        | Mailchimp.ListMemberActivityFeedListsRequestActivityFiltersItem[];
}

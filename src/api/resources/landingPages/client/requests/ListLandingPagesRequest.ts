//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListLandingPagesRequest {
    /** Determines the order direction for sorted results. */
    sortDir?: Mailchimp.ListLandingPagesRequestSortDir;
    /** Returns files sorted by the specified field. */
    sortField?: Mailchimp.ListLandingPagesRequestSortField;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
}

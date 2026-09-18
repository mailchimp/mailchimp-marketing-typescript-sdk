//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListFilesFileManagerRequest {
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** The file type for the File Manager file. */
    type?: string;
    /** The Mailchimp account user who created the File Manager file. */
    createdBy?: string;
    /** Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeCreatedAt?: string;
    /** Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceCreatedAt?: string;
    /** Returns files sorted by the specified field. */
    sortField?: Mailchimp.ListFilesFileManagerRequestSortField;
    /** Determines the order direction for sorted results. */
    sortDir?: Mailchimp.ListFilesFileManagerRequestSortDir;
}

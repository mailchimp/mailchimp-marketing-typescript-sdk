//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         subscriber_hash: "subscriber_hash"
 *     }
 */
export interface ListMemberNotesListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriber_hash: string;
    /** Returns notes sorted by the specified field. */
    sort_field?: Mailchimp.ListMemberNotesListsRequestSortField;
    /** Determines the order direction for sorted results. */
    sort_dir?: Mailchimp.ListMemberNotesListsRequestSortDir;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
}

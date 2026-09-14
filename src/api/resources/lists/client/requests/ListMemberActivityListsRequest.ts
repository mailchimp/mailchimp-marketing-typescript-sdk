//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         subscriber_hash: "subscriber_hash"
 *     }
 */
export interface ListMemberActivityListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriber_hash: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** A comma seperated list of actions to return. */
    action?: Mailchimp.ListMemberActivityListsRequestActionItem | Mailchimp.ListMemberActivityListsRequestActionItem[];
}

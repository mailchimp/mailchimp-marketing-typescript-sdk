//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash",
 *         tags: [{
 *                 name: "name",
 *                 status: "inactive"
 *             }]
 *     }
 */
export interface CreateMemberTagListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
    /** When is_syncing is true, automations based on the tags in the request will not fire */
    isSyncing?: boolean;
    /** A list of tags assigned to the list member. */
    tags: Mailchimp.CreateMemberTagListsRequestTagsItem[];
}

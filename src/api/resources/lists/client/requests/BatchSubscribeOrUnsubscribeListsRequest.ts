//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         members: []
 *     }
 */
export interface BatchSubscribeOrUnsubscribeListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false. */
    skipMergeValidation?: boolean;
    /** If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false. */
    skipDuplicateCheck?: boolean;
    /** An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call. */
    members: Mailchimp.BatchSubscribeOrUnsubscribeListsRequestMembersItem[];
    /** Whether this batch operation will replace all existing tags with tags in request. */
    syncTags?: boolean | null;
    /** Whether this batch operation will change existing members' subscription status. */
    updateExisting?: boolean | null;
}

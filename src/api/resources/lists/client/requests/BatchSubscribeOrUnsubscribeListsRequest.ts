//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         members: []
 *     }
 */
export interface BatchSubscribeOrUnsubscribeListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false. */
    skip_merge_validation?: boolean;
    /** If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false. */
    skip_duplicate_check?: boolean;
    /** An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call. */
    members: BatchSubscribeOrUnsubscribeListsRequest.Members.Item[];
    /** Whether this batch operation will replace all existing tags with tags in request. */
    sync_tags?: boolean | null;
    /** Whether this batch operation will change existing members' subscription status. */
    update_existing?: boolean | null;
}

export namespace BatchSubscribeOrUnsubscribeListsRequest {
    export type Members = Members.Item[];

    export namespace Members {
        /**
         * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
         */
        export type Item = unknown;
    }
}

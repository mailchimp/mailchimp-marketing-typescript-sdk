//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface DeleteMemberListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriberHash: string;
}

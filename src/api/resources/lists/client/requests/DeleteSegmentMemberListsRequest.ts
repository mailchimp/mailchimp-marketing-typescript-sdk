//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         segmentId: "segment_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface DeleteSegmentMemberListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique id for the segment. */
    segmentId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
}

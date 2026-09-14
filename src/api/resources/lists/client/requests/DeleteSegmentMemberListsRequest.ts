//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         segment_id: "segment_id",
 *         subscriber_hash: "subscriber_hash"
 *     }
 */
export interface DeleteSegmentMemberListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique id for the segment. */
    segment_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriber_hash: string;
}

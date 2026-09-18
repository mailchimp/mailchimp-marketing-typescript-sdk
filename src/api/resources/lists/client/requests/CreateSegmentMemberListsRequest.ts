//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         segmentId: "segment_id",
 *         emailAddress: "email_address"
 *     }
 */
export interface CreateSegmentMemberListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique id for the segment. */
    segmentId: string;
    /** Email address for a subscriber. */
    emailAddress: string;
}

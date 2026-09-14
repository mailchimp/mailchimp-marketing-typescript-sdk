//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         segment_id: "segment_id",
 *         email_address: "email_address"
 *     }
 */
export interface CreateSegmentMemberListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique id for the segment. */
    segment_id: string;
    /** Email address for a subscriber. */
    email_address: string;
}

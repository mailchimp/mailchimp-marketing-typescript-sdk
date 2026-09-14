//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         segment_id: "segment_id"
 *     }
 */
export interface GetSegmentListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique id for the segment. */
    segment_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** Include cleaned members in response */
    include_cleaned?: boolean;
    /** Include transactional members in response */
    include_transactional?: boolean;
    /** Include unsubscribed members in response */
    include_unsubscribed?: boolean;
}

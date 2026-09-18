//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         segmentId: "segment_id"
 *     }
 */
export interface GetSegmentListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique id for the segment. */
    segmentId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** Include cleaned members in response */
    includeCleaned?: boolean;
    /** Include transactional members in response */
    includeTransactional?: boolean;
    /** Include unsubscribed members in response */
    includeUnsubscribed?: boolean;
}

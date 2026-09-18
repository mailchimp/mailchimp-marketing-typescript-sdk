//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         mergeId: "merge_id"
 *     }
 */
export interface GetMergeFieldListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The id for the merge field. */
    mergeId: string;
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id"
 *     }
 */
export interface ListTagSearchListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned. */
    name?: string;
}

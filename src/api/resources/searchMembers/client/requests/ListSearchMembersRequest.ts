//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         query: "query"
 *     }
 */
export interface ListSearchMembersRequest {
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name. */
    query: string;
    /** The unique id for the list. */
    listId?: string;
}

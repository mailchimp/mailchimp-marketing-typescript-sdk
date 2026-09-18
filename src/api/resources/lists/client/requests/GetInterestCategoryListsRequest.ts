//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         interestCategoryId: "interest_category_id"
 *     }
 */
export interface GetInterestCategoryListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique ID for the interest category. */
    interestCategoryId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         interestCategoryId: "interest_category_id",
 *         interestId: "interest_id"
 *     }
 */
export interface DeleteInterestCategoryInterestListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique ID for the interest category. */
    interestCategoryId: string;
    /** The specific interest or 'group name'. */
    interestId: string;
}

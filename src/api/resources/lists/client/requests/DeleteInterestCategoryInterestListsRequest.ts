//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         interest_category_id: "interest_category_id",
 *         interest_id: "interest_id"
 *     }
 */
export interface DeleteInterestCategoryInterestListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique ID for the interest category. */
    interest_category_id: string;
    /** The specific interest or 'group name'. */
    interest_id: string;
}

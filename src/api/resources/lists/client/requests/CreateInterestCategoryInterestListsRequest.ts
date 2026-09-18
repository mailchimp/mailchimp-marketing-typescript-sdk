//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         interestCategoryId: "interest_category_id",
 *         name: "name"
 *     }
 */
export interface CreateInterestCategoryInterestListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique ID for the interest category. */
    interestCategoryId: string;
    /** The display order for interests. */
    displayOrder?: number;
    /** The name of the interest. This can be shown publicly on a subscription form. */
    name: string;
}

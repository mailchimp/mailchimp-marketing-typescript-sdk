//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         interest_category_id: "interest_category_id"
 *     }
 */
export interface GetInterestCategoryListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique ID for the interest category. */
    interest_category_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

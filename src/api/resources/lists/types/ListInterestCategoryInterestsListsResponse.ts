//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of this category's interests
 */
export interface ListInterestCategoryInterestsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListInterestCategoryInterestsListsResponseLinksItem[];
    /** The id for the interest category. */
    categoryId?: string;
    /** An array of this category's interests */
    interests?: Mailchimp.Interest[];
    /** The unique list id that the interests belong to. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

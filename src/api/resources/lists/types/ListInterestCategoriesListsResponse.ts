//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Information about this list's interest categories.
 */
export interface ListInterestCategoriesListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListInterestCategoriesListsResponseLinksItem[];
    /** This array contains individual interest categories. */
    categories?: Mailchimp.InterestCategory[];
    /** The ID for the list that this category belongs to. */
    listId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

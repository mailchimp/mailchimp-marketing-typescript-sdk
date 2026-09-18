//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         interestCategoryId: "interest_category_id"
 *     }
 */
export interface UpdateInterestCategoryListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique ID for the interest category. */
    interestCategoryId: string;
    /** The order that the categories are displayed in the list. Lower numbers display first. */
    displayOrder?: number;
    /** The text description of this category. This field appears on signup forms and is often phrased as a question. */
    title?: string;
    /** Determines how this category’s interests appear on signup forms. */
    type?: Mailchimp.UpdateInterestCategoryListsRequestType;
}

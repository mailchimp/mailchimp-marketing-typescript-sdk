//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         title: "title",
 *         type: "checkboxes"
 *     }
 */
export interface CreateInterestCategoryListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The order that the categories are displayed in the list. Lower numbers display first. */
    displayOrder?: number;
    /** The text description of this category. This field appears on signup forms and is often phrased as a question. */
    title: string;
    /** Determines how this category’s interests appear on signup forms. */
    type: Mailchimp.CreateInterestCategoryListsRequestType;
}

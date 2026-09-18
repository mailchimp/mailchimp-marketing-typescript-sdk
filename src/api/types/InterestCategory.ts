//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
 */
export interface InterestCategory {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.InterestCategoryLinksItem[];
    /** The order that the categories are displayed in the list. Lower numbers display first. */
    displayOrder?: number;
    /** The id for the interest category. */
    id?: string;
    /** The unique list id for the category. */
    listId?: string;
    /** The text description of this category. This field appears on signup forms and is often phrased as a question. */
    title?: string;
    /** Determines how this category’s interests appear on signup forms. */
    type?: Mailchimp.InterestCategoryType;
}

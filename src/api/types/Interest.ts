//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Assign subscribers to interests to group them together. Interests are referred to as 'group names' in the Mailchimp application.
 */
export interface Interest {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.InterestLinksItem[];
    /** The id for the interest category. */
    categoryId?: string;
    /** The display order for interests. */
    displayOrder?: number;
    /** The ID for the interest. */
    id?: string;
    /** The ID for the list that this interest belongs to. */
    listId?: string;
    /** The name of the interest. This can be shown publicly on a subscription form. */
    name?: string;
    /** The number of subscribers associated with this interest. */
    subscriberCount?: string;
}

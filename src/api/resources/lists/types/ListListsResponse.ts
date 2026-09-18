//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of subscriber lists for this account.
 */
export interface ListListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListListsResponseLinksItem[];
    /** Do particular authorization constraints around this collection limit creation of new instances? */
    constraints?: Mailchimp.ListListsResponseConstraints;
    /** An array of objects, each representing a list. */
    lists: Mailchimp.SubscriberList[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

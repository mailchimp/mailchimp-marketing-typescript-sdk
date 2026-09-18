//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of events for a given contact
 */
export interface ListMemberEventsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMemberEventsListsResponseLinksItem[];
    /** An array of objects, each representing an event. */
    events?: Mailchimp.ListMemberEventsListsResponseEventsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

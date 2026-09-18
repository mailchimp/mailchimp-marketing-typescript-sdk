//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of Chimp Chatter messages. There's a maximum of 200 messages present for an account.
 */
export interface ListChimpChatterActivityFeedResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListChimpChatterActivityFeedResponseLinksItem[];
    /** An array of Chimp Chatter messages. There's a maximum of 200 messages present for an account. */
    chimpChatter?: Mailchimp.ListChimpChatterActivityFeedResponseChimpChatterItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

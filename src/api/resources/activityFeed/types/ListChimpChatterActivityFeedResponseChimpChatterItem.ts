//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A Chimp Chatter message
 */
export interface ListChimpChatterActivityFeedResponseChimpChatterItem {
    /** If it exists, campaign ID for the associated campaign */
    campaignId?: string;
    /** If it exists, list ID for the associated list */
    listId?: string;
    message?: string;
    title?: string;
    /** The type of activity */
    type?: Mailchimp.ListChimpChatterActivityFeedResponseChimpChatterItemType;
    /** The date and time this activity was updated. */
    updateTime?: Date;
    /** URL to a report that includes this activity */
    url?: string;
}

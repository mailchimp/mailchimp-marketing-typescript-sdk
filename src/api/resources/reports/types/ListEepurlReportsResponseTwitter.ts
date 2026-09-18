//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of Twitter activity for a campaign.
 */
export interface ListEepurlReportsResponseTwitter {
    /** The day and time of the first recorded tweet with a link to the campaign. */
    firstTweet?: string;
    /** The day and time of the last recorded tweet with a link to the campaign. */
    lastTweet?: string;
    /** The number of retweets that include a link to the campaign. */
    retweets?: number;
    /** A summary of tweets that include a link to the campaign. */
    statuses?: Mailchimp.ListEepurlReportsResponseTwitterStatusesItem[];
    /** The number of tweets including a link to the campaign. */
    tweets?: number;
}

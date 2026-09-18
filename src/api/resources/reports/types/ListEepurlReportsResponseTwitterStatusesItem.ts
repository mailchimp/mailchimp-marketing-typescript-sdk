//  This file was auto-generated from our API Definition.

/**
 * An individual tweet.
 */
export interface ListEepurlReportsResponseTwitterStatusesItem {
    /** A timestamp for the tweet. */
    datetime?: Date;
    /** A 'true' or 'false' status of whether the tweet is a retweet. */
    isRetweet?: boolean;
    /** The Twitter handle for the author of the tweet. */
    screenName?: string;
    /** The body of the tweet. */
    status?: string;
    /** The individual id for the tweet. */
    statusId?: string;
}

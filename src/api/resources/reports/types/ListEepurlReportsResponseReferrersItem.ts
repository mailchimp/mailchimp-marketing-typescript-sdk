//  This file was auto-generated from our API Definition.

/**
 * A single instance of a campaign referral.
 */
export interface ListEepurlReportsResponseReferrersItem {
    /** The number of clicks a single referrer generated. */
    clicks?: number;
    /** The timestamp for the first click from this referrer. */
    firstClick?: Date;
    /** The timestamp for the last click from this referrer. */
    lastClick?: Date;
    /** A referrer (truncated to 100 bytes). */
    referrer?: string;
}

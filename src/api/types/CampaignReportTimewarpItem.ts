//  This file was auto-generated from our API Definition.

export interface CampaignReportTimewarpItem {
    /** The number of bounces. */
    bounces?: number;
    /** The number of clicks. */
    clicks?: number;
    /** For campaigns sent with timewarp, the time zone group the member is apart of. */
    gmtOffset?: number;
    /** The date and time of the last click in ISO 8601 format. */
    lastClick?: Date;
    /** The date and time of the last open in ISO 8601 format. */
    lastOpen?: Date;
    /** The number of opens. */
    opens?: number;
    /** The number of unique clicks. */
    uniqueClicks?: number;
    /** The number of unique opens. */
    uniqueOpens?: number;
}

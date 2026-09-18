//  This file was auto-generated from our API Definition.

export interface CampaignReportTimeseriesItem {
    /** The number of emails sent in the timeseries. */
    emailsSent?: number;
    /** The number of unique opens in the timeseries, excluding opens from email clients that use proxies. */
    proxyExcludedUniqueOpens?: number;
    /** The number of clicks in the timeseries. */
    recipientsClicks?: number;
    /** The date and time for the series in ISO 8601 format. */
    timestamp?: Date;
    /** The number of unique opens in the timeseries. */
    uniqueOpens?: number;
}

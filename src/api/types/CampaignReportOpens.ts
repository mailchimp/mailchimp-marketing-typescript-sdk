//  This file was auto-generated from our API Definition.

/**
 * An object describing the open activity for the campaign.
 */
export interface CampaignReportOpens {
    /** The date and time of the last recorded open in ISO 8601 format. */
    lastOpen?: Date;
    /** The number of unique opens for a campaign divided by the total number of successful deliveries. */
    openRate?: number;
    /** The total number of opens for a campaign. */
    opensTotal?: number;
    /** The average unique open rate for a campaign, excluding opens from email clients that use proxies. */
    proxyExcludedOpenRate?: number;
    /** The total number of opens for a campaign, excluding opens from email clients that use proxies. */
    proxyExcludedOpens?: number;
    /** The total number of unique opens for a campaign, excluding opens from email clients that use proxies. */
    proxyExcludedUniqueOpens?: number;
    /** The total number of unique opens for a campaign. */
    uniqueOpens?: number;
}

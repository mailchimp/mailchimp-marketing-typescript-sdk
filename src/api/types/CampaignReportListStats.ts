//  This file was auto-generated from our API Definition.

/**
 * The average campaign statistics for your list. This won't be present if we haven't calculated it yet for this list.
 */
export interface CampaignReportListStats {
    /** The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list. */
    clickRate?: number;
    /** The average unique open rate (a percentage represented as a number between 0 and 100) per campaign for the list. */
    openRate?: number;
    /** The average unique open rate (a percentage represented as a number between 0 and 100) per campaign for the list, excluding opens from email clients that use proxies. */
    proxyExcludedOpenRate?: number;
    /** The average number of subscriptions per month for the list. */
    subRate?: number;
    /** The average number of unsubscriptions per month for the list. */
    unsubRate?: number;
}

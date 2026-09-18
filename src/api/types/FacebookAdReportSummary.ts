//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * High level reporting stats for an outreach.
 */
export interface FacebookAdReportSummary {
    clickRate?: number;
    clicks?: number;
    conversionRate?: number;
    ecommerce?: Mailchimp.FacebookAdReportSummaryEcommerce;
    engagements?: number;
    impressions?: number;
    openRate?: number;
    opens?: number;
    proxyExcludedOpenRate?: number;
    proxyExcludedOpens?: number;
    proxyExcludedUniqueOpens?: number;
    reach?: number;
    subscriberClicks?: number;
    subscribes?: number;
    totalSent?: number;
    uniqueOpens?: number;
    uniqueVisits?: number;
    visits?: number;
}

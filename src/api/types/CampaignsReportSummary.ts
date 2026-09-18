//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * For sent campaigns, a summary of opens, clicks, and e-commerce data.
 */
export interface CampaignsReportSummary {
    /** The number of unique clicks divided by the total number of successful deliveries. */
    clickRate?: number;
    /** The total number of clicks for an campaign. */
    clicks?: number;
    /** E-Commerce stats for a campaign. */
    ecommerce?: Mailchimp.CampaignsReportSummaryEcommerce;
    /** The number of unique opens divided by the total number of successful deliveries. */
    openRate?: number;
    /** The total number of opens for a campaign. */
    opens?: number;
    /** The number of unique clicks. */
    subscriberClicks?: number;
    /** The number of unique opens. */
    uniqueOpens?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Report summary of facebook ad
 */
export interface ReportingFacebookAdReportSummary {
    averageDailyBudget?: Mailchimp.ReportingFacebookAdReportSummaryAverageDailyBudget;
    averageOrderAmount?: Mailchimp.ReportingFacebookAdReportSummaryAverageOrderAmount;
    clickRate?: number;
    clicks?: number;
    comments?: number;
    costPerClick?: Mailchimp.ReportingFacebookAdReportSummaryCostPerClick;
    ecommerce?: Mailchimp.ReportingFacebookAdReportSummaryEcommerce;
    extendedAt?: Mailchimp.ReportingFacebookAdReportSummaryExtendedAt;
    firstTimeBuyers?: number;
    hasExtendedAdDuration?: boolean;
    impressions?: number;
    likes?: number;
    reach?: number;
    returnOnInvestment?: number;
    shares?: number;
    totalOrders?: number;
    totalProductsSold?: number;
    uniqueClicks?: number;
}

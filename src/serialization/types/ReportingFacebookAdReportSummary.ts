//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ReportingFacebookAdReportSummaryAverageDailyBudget } from "./ReportingFacebookAdReportSummaryAverageDailyBudget.js";
import { ReportingFacebookAdReportSummaryAverageOrderAmount } from "./ReportingFacebookAdReportSummaryAverageOrderAmount.js";
import { ReportingFacebookAdReportSummaryCostPerClick } from "./ReportingFacebookAdReportSummaryCostPerClick.js";
import { ReportingFacebookAdReportSummaryEcommerce } from "./ReportingFacebookAdReportSummaryEcommerce.js";
import { ReportingFacebookAdReportSummaryExtendedAt } from "./ReportingFacebookAdReportSummaryExtendedAt.js";

export const ReportingFacebookAdReportSummary: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdReportSummary.Raw,
    Mailchimp.ReportingFacebookAdReportSummary
> = core.serialization.object({
    averageDailyBudget: core.serialization.property(
        "average_daily_budget",
        ReportingFacebookAdReportSummaryAverageDailyBudget.optional(),
    ),
    averageOrderAmount: core.serialization.property(
        "average_order_amount",
        ReportingFacebookAdReportSummaryAverageOrderAmount.optional(),
    ),
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    clicks: core.serialization.number().optional(),
    comments: core.serialization.number().optional(),
    costPerClick: core.serialization.property(
        "cost_per_click",
        ReportingFacebookAdReportSummaryCostPerClick.optional(),
    ),
    ecommerce: ReportingFacebookAdReportSummaryEcommerce.optional(),
    extendedAt: core.serialization.property("extended_at", ReportingFacebookAdReportSummaryExtendedAt.optional()),
    firstTimeBuyers: core.serialization.property("first_time_buyers", core.serialization.number().optional()),
    hasExtendedAdDuration: core.serialization.property(
        "has_extended_ad_duration",
        core.serialization.boolean().optional(),
    ),
    impressions: core.serialization.number().optional(),
    likes: core.serialization.number().optional(),
    reach: core.serialization.number().optional(),
    returnOnInvestment: core.serialization.property("return_on_investment", core.serialization.number().optional()),
    shares: core.serialization.number().optional(),
    totalOrders: core.serialization.property("total_orders", core.serialization.number().optional()),
    totalProductsSold: core.serialization.property("total_products_sold", core.serialization.number().optional()),
    uniqueClicks: core.serialization.property("unique_clicks", core.serialization.number().optional()),
});

export declare namespace ReportingFacebookAdReportSummary {
    export interface Raw {
        average_daily_budget?: ReportingFacebookAdReportSummaryAverageDailyBudget.Raw | null;
        average_order_amount?: ReportingFacebookAdReportSummaryAverageOrderAmount.Raw | null;
        click_rate?: number | null;
        clicks?: number | null;
        comments?: number | null;
        cost_per_click?: ReportingFacebookAdReportSummaryCostPerClick.Raw | null;
        ecommerce?: ReportingFacebookAdReportSummaryEcommerce.Raw | null;
        extended_at?: ReportingFacebookAdReportSummaryExtendedAt.Raw | null;
        first_time_buyers?: number | null;
        has_extended_ad_duration?: boolean | null;
        impressions?: number | null;
        likes?: number | null;
        reach?: number | null;
        return_on_investment?: number | null;
        shares?: number | null;
        total_orders?: number | null;
        total_products_sold?: number | null;
        unique_clicks?: number | null;
    }
}

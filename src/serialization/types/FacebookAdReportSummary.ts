//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdReportSummaryEcommerce } from "./FacebookAdReportSummaryEcommerce.js";

export const FacebookAdReportSummary: core.serialization.ObjectSchema<
    serializers.FacebookAdReportSummary.Raw,
    Mailchimp.FacebookAdReportSummary
> = core.serialization.object({
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    clicks: core.serialization.number().optional(),
    conversionRate: core.serialization.property("conversion_rate", core.serialization.number().optional()),
    ecommerce: FacebookAdReportSummaryEcommerce.optional(),
    engagements: core.serialization.number().optional(),
    impressions: core.serialization.number().optional(),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    opens: core.serialization.number().optional(),
    proxyExcludedOpenRate: core.serialization.property(
        "proxy_excluded_open_rate",
        core.serialization.number().optional(),
    ),
    proxyExcludedOpens: core.serialization.property("proxy_excluded_opens", core.serialization.number().optional()),
    proxyExcludedUniqueOpens: core.serialization.property(
        "proxy_excluded_unique_opens",
        core.serialization.number().optional(),
    ),
    reach: core.serialization.number().optional(),
    subscriberClicks: core.serialization.property("subscriber_clicks", core.serialization.number().optional()),
    subscribes: core.serialization.number().optional(),
    totalSent: core.serialization.property("total_sent", core.serialization.number().optional()),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
    uniqueVisits: core.serialization.property("unique_visits", core.serialization.number().optional()),
    visits: core.serialization.number().optional(),
});

export declare namespace FacebookAdReportSummary {
    export interface Raw {
        click_rate?: number | null;
        clicks?: number | null;
        conversion_rate?: number | null;
        ecommerce?: FacebookAdReportSummaryEcommerce.Raw | null;
        engagements?: number | null;
        impressions?: number | null;
        open_rate?: number | null;
        opens?: number | null;
        proxy_excluded_open_rate?: number | null;
        proxy_excluded_opens?: number | null;
        proxy_excluded_unique_opens?: number | null;
        reach?: number | null;
        subscriber_clicks?: number | null;
        subscribes?: number | null;
        total_sent?: number | null;
        unique_opens?: number | null;
        unique_visits?: number | null;
        visits?: number | null;
    }
}

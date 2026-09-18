//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageReportTimeseriesDailyStats } from "./LandingPageReportTimeseriesDailyStats.js";
import { LandingPageReportTimeseriesWeeklyStats } from "./LandingPageReportTimeseriesWeeklyStats.js";

export const LandingPageReportTimeseries: core.serialization.ObjectSchema<
    serializers.LandingPageReportTimeseries.Raw,
    Mailchimp.LandingPageReportTimeseries
> = core.serialization.object({
    dailyStats: core.serialization.property("daily_stats", LandingPageReportTimeseriesDailyStats.optional()),
    weeklyStats: core.serialization.property("weekly_stats", LandingPageReportTimeseriesWeeklyStats.optional()),
});

export declare namespace LandingPageReportTimeseries {
    export interface Raw {
        daily_stats?: LandingPageReportTimeseriesDailyStats.Raw | null;
        weekly_stats?: LandingPageReportTimeseriesWeeklyStats.Raw | null;
    }
}

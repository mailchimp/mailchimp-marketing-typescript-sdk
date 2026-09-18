//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageReportTimeseriesWeeklyStatsClicksItem } from "./LandingPageReportTimeseriesWeeklyStatsClicksItem.js";
import { LandingPageReportTimeseriesWeeklyStatsUniqueVisitsItem } from "./LandingPageReportTimeseriesWeeklyStatsUniqueVisitsItem.js";
import { LandingPageReportTimeseriesWeeklyStatsVisitsItem } from "./LandingPageReportTimeseriesWeeklyStatsVisitsItem.js";

export const LandingPageReportTimeseriesWeeklyStats: core.serialization.ObjectSchema<
    serializers.LandingPageReportTimeseriesWeeklyStats.Raw,
    Mailchimp.LandingPageReportTimeseriesWeeklyStats
> = core.serialization.object({
    clicks: core.serialization.list(LandingPageReportTimeseriesWeeklyStatsClicksItem).optional(),
    uniqueVisits: core.serialization.property(
        "unique_visits",
        core.serialization.list(LandingPageReportTimeseriesWeeklyStatsUniqueVisitsItem).optional(),
    ),
    visits: core.serialization.list(LandingPageReportTimeseriesWeeklyStatsVisitsItem).optional(),
});

export declare namespace LandingPageReportTimeseriesWeeklyStats {
    export interface Raw {
        clicks?: LandingPageReportTimeseriesWeeklyStatsClicksItem.Raw[] | null;
        unique_visits?: LandingPageReportTimeseriesWeeklyStatsUniqueVisitsItem.Raw[] | null;
        visits?: LandingPageReportTimeseriesWeeklyStatsVisitsItem.Raw[] | null;
    }
}

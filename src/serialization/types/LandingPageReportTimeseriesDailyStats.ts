//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageReportTimeseriesDailyStatsClicksItem } from "./LandingPageReportTimeseriesDailyStatsClicksItem.js";
import { LandingPageReportTimeseriesDailyStatsUniqueVisitsItem } from "./LandingPageReportTimeseriesDailyStatsUniqueVisitsItem.js";
import { LandingPageReportTimeseriesDailyStatsVisitsItem } from "./LandingPageReportTimeseriesDailyStatsVisitsItem.js";

export const LandingPageReportTimeseriesDailyStats: core.serialization.ObjectSchema<
    serializers.LandingPageReportTimeseriesDailyStats.Raw,
    Mailchimp.LandingPageReportTimeseriesDailyStats
> = core.serialization.object({
    clicks: core.serialization.list(LandingPageReportTimeseriesDailyStatsClicksItem).optional(),
    uniqueVisits: core.serialization.property(
        "unique_visits",
        core.serialization.list(LandingPageReportTimeseriesDailyStatsUniqueVisitsItem).optional(),
    ),
    visits: core.serialization.list(LandingPageReportTimeseriesDailyStatsVisitsItem).optional(),
});

export declare namespace LandingPageReportTimeseriesDailyStats {
    export interface Raw {
        clicks?: LandingPageReportTimeseriesDailyStatsClicksItem.Raw[] | null;
        unique_visits?: LandingPageReportTimeseriesDailyStatsUniqueVisitsItem.Raw[] | null;
        visits?: LandingPageReportTimeseriesDailyStatsVisitsItem.Raw[] | null;
    }
}

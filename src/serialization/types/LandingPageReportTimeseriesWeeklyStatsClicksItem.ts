//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageReportTimeseriesWeeklyStatsClicksItem: core.serialization.ObjectSchema<
    serializers.LandingPageReportTimeseriesWeeklyStatsClicksItem.Raw,
    Mailchimp.LandingPageReportTimeseriesWeeklyStatsClicksItem
> = core.serialization.object({
    date: core.serialization.string().optional(),
    val: core.serialization.number().optional(),
});

export declare namespace LandingPageReportTimeseriesWeeklyStatsClicksItem {
    export interface Raw {
        date?: string | null;
        val?: number | null;
    }
}

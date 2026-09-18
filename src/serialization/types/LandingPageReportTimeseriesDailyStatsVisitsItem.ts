//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageReportTimeseriesDailyStatsVisitsItem: core.serialization.ObjectSchema<
    serializers.LandingPageReportTimeseriesDailyStatsVisitsItem.Raw,
    Mailchimp.LandingPageReportTimeseriesDailyStatsVisitsItem
> = core.serialization.object({
    date: core.serialization.string().optional(),
    val: core.serialization.number().optional(),
});

export declare namespace LandingPageReportTimeseriesDailyStatsVisitsItem {
    export interface Raw {
        date?: string | null;
        val?: number | null;
    }
}

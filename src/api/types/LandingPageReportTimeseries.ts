//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface LandingPageReportTimeseries {
    /** The clicks and visits data from the last seven days. */
    dailyStats?: Mailchimp.LandingPageReportTimeseriesDailyStats;
    /** The clicks and visits data from the last five weeks. */
    weeklyStats?: Mailchimp.LandingPageReportTimeseriesWeeklyStats;
}

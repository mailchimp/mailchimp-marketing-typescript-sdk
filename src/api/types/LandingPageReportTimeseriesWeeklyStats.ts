//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The clicks and visits data from the last five weeks.
 */
export interface LandingPageReportTimeseriesWeeklyStats {
    /** The total number of clicks in a week. */
    clicks?: Mailchimp.LandingPageReportTimeseriesWeeklyStatsClicksItem[];
    uniqueVisits?: Mailchimp.LandingPageReportTimeseriesWeeklyStatsUniqueVisitsItem[];
    /** The total number of visits in a week. */
    visits?: Mailchimp.LandingPageReportTimeseriesWeeklyStatsVisitsItem[];
}

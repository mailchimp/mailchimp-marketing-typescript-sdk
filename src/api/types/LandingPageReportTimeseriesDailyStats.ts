//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The clicks and visits data from the last seven days.
 */
export interface LandingPageReportTimeseriesDailyStats {
    clicks?: Mailchimp.LandingPageReportTimeseriesDailyStatsClicksItem[];
    uniqueVisits?: Mailchimp.LandingPageReportTimeseriesDailyStatsUniqueVisitsItem[];
    visits?: Mailchimp.LandingPageReportTimeseriesDailyStatsVisitsItem[];
}

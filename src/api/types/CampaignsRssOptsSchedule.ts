//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The schedule for sending the RSS Campaign.
 */
export interface CampaignsRssOptsSchedule {
    /** The days of the week to send a daily RSS Campaign. */
    dailySend?: Mailchimp.CampaignsRssOptsScheduleDailySend;
    /** The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](https://mailchimp.com/help/set-account-details/). */
    hour?: number;
    /** The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February. */
    monthlySendDate?: number;
    /** The day of the week to send a weekly RSS Campaign. */
    weeklySendDay?: Mailchimp.CampaignsRssOptsScheduleWeeklySendDay;
}

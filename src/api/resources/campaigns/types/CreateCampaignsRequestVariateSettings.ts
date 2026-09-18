//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The settings specific to A/B test campaigns.
 */
export interface CreateCampaignsRequestVariateSettings {
    /** The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used. */
    fromNames?: string[];
    /** The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used. */
    replyToAddresses?: string[];
    /** The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS or ISO 8601 date-time format. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored. */
    sendTimes?: Mailchimp.CreateCampaignsRequestVariateSettingsSendTimesItem[];
    /** The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used. */
    subjectLines?: string[];
    /** The percentage of recipients to send the test combinations to, must be a value between 10 and 100. */
    testSize?: number;
    /** The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes. */
    waitTime?: number;
    /** The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. */
    winnerCriteria: Mailchimp.CreateCampaignsRequestVariateSettingsWinnerCriteria;
}

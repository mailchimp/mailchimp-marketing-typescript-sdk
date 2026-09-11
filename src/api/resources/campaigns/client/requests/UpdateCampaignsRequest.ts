//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaign_id: "campaign_id"
 *     }
 */
export interface UpdateCampaignsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    /** List settings for the campaign. */
    recipients?: UpdateCampaignsRequest.Recipients;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign. */
    rss_opts?: UpdateCampaignsRequest.RssOpts;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: UpdateCampaignsRequest.Settings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    social_card?: UpdateCampaignsRequest.SocialCard;
    tracking?: Mailchimp.CampaignTrackingOptions;
    /** The settings specific to A/B test campaigns. */
    variate_settings?: UpdateCampaignsRequest.VariateSettings;
}

export namespace UpdateCampaignsRequest {
    /**
     * List settings for the campaign.
     */
    export interface Recipients {
        /** The unique list id. */
        list_id?: string | undefined;
        /** An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options. */
        segment_opts?: Recipients.SegmentOpts | undefined;
    }

    export namespace Recipients {
        /**
         * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
         */
        export interface SegmentOpts {
            conditions?: Mailchimp.SegmentType | undefined;
            /** Segment match type. */
            match?: SegmentOpts.Match | undefined;
            /** The prebuilt segment id, if a prebuilt segment has been designated for this campaign. */
            prebuilt_segment_id?: string | undefined;
            /** The id for an existing saved segment. */
            saved_segment_id?: SegmentOpts.SavedSegmentId | undefined;
        }

        export namespace SegmentOpts {
            /** Segment match type. */
            export const Match = {
                Any: "any",
                All: "all",
            } as const;
            export type Match = (typeof Match)[keyof typeof Match];
            /**
             * The id for an existing saved segment.
             */
            export type SavedSegmentId = number | string;
        }
    }

    /**
     * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign.
     */
    export interface RssOpts {
        /** Whether to add CSS to images in the RSS feed to constrain their width in campaigns. */
        constrain_rss_img?: boolean | undefined;
        /** The URL for the RSS feed. */
        feed_url?: string | undefined;
        /** The frequency of the RSS Campaign. */
        frequency?: RssOpts.Frequency | undefined;
        /** The schedule for sending the RSS Campaign. */
        schedule?: RssOpts.Schedule | undefined;
    }

    export namespace RssOpts {
        /** The frequency of the RSS Campaign. */
        export const Frequency = {
            Daily: "daily",
            Weekly: "weekly",
            Monthly: "monthly",
        } as const;
        export type Frequency = (typeof Frequency)[keyof typeof Frequency];

        /**
         * The schedule for sending the RSS Campaign.
         */
        export interface Schedule {
            /** The days of the week to send a daily RSS Campaign. */
            daily_send?: Schedule.DailySend | undefined;
            /** The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in [your account's default time zone](https://mailchimp.com/help/set-account-details/). */
            hour?: number | undefined;
            /** The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February. */
            monthly_send_date?: number | undefined;
            /** The day of the week to send a weekly RSS Campaign. */
            weekly_send_day?: Schedule.WeeklySendDay | undefined;
        }

        export namespace Schedule {
            /**
             * The days of the week to send a daily RSS Campaign.
             */
            export interface DailySend {
                /** Sends the daily RSS Campaign on Fridays. */
                friday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Mondays. */
                monday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Saturdays. */
                saturday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Sundays. */
                sunday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Thursdays. */
                thursday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Tuesdays. */
                tuesday?: boolean | undefined;
                /** Sends the daily RSS Campaign on Wednesdays. */
                wednesday?: boolean | undefined;
            }

            /** The day of the week to send a weekly RSS Campaign. */
            export const WeeklySendDay = {
                Sunday: "sunday",
                Monday: "monday",
                Tuesday: "tuesday",
                Wednesday: "wednesday",
                Thursday: "thursday",
                Friday: "friday",
                Saturday: "saturday",
            } as const;
            export type WeeklySendDay = (typeof WeeklySendDay)[keyof typeof WeeklySendDay];
        }
    }

    /**
     * The settings for your campaign, including subject, from name, reply-to address, and more.
     */
    export interface Settings {
        /** Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`. */
        authenticate?: boolean | undefined;
        /** An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to. */
        auto_fb_post?: string[] | undefined;
        /** Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign. */
        auto_footer?: boolean | undefined;
        /** Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent. */
        auto_tweet?: boolean | undefined;
        /** Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`. */
        fb_comments?: boolean | undefined;
        /** If the campaign is listed in a folder, the id for that folder. */
        folder_id?: string | undefined;
        /** The 'from' name on the campaign (not an email address). */
        from_name?: string | undefined;
        /** Automatically inline the CSS included with the campaign content. */
        inline_css?: boolean | undefined;
        /** The preview text for the campaign. */
        preview_text?: string | undefined;
        /** The reply-to email address for the campaign. */
        reply_to?: string | undefined;
        /** The subject line for the campaign. */
        subject_line?: string | undefined;
        /** The id of the template to use. */
        template_id?: number | undefined;
        /** The title of the campaign. */
        title?: string | undefined;
        /** The campaign's custom 'To' name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/). */
        to_name?: string | undefined;
        /** Use Mailchimp Conversation feature to manage out-of-office replies. */
        use_conversation?: boolean | undefined;
    }

    /**
     * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
     */
    export interface SocialCard {
        /** A short summary of the campaign to display. */
        description?: string | undefined;
        /** The url for the header image for the card. */
        image_url?: string | undefined;
        /** The title for the card. Typically the subject line of the campaign. */
        title?: string | undefined;
    }

    /**
     * The settings specific to A/B test campaigns.
     */
    export interface VariateSettings {
        /** The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used. */
        from_names?: string[] | undefined;
        /** The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used. */
        reply_to_addresses?: string[] | undefined;
        /** The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS or ISO 8601 date-time format. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored. */
        send_times?: VariateSettings.SendTimes.Item[] | undefined;
        /** The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used. */
        subject_lines?: string[] | undefined;
        /** The percentage of recipients to send the test combinations to, must be a value between 10 and 100. */
        test_size?: number | undefined;
        /** The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes. */
        wait_time?: number | undefined;
        /** The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. */
        winner_criteria?: VariateSettings.WinnerCriteria | undefined;
    }

    export namespace VariateSettings {
        export type SendTimes = SendTimes.Item[];

        export namespace SendTimes {
            export type Item = string | string;
        }

        /** The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. */
        export const WinnerCriteria = {
            Opens: "opens",
            Clicks: "clicks",
            Manual: "manual",
            TotalRevenue: "total_revenue",
        } as const;
        export type WinnerCriteria = (typeof WinnerCriteria)[keyof typeof WinnerCriteria];
    }
}

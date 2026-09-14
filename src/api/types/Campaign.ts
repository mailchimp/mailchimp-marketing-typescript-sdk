//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual campaign's settings and content.
 */
export interface Campaign {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: Campaign.Links.Item[] | undefined;
    ab_split_opts?: Mailchimp.AbTestingOptions | undefined;
    /** The link to the campaign's archive version. */
    archive_url?: string | undefined;
    /** How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url'). */
    content_type?: string | undefined;
    /** The date and time the campaign was created in ISO 8601 format. */
    create_time?: string | undefined;
    /** Updates on campaigns in the process of sending. */
    delivery_status?: Campaign.DeliveryStatus | undefined;
    /** The total number of emails sent for this campaign. */
    emails_sent?: number | undefined;
    /** A string that uniquely identifies this campaign. */
    id?: string | undefined;
    /** The original link to the campaign's archive version. */
    long_archive_url?: string | undefined;
    /** Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false. */
    needs_block_refresh?: boolean | undefined;
    /** If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children. */
    parent_campaign_id?: string | undefined;
    /** List settings for the campaign. */
    recipients?: Campaign.Recipients | undefined;
    /** For sent campaigns, a summary of opens and clicks. */
    report_summary?: Campaign.ReportSummary | undefined;
    /** Determines if the campaign qualifies to be resent to non-openers. */
    resendable?: boolean | undefined;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign. */
    rss_opts?: Campaign.RssOpts | undefined;
    /** The date and time a campaign was sent in ISO 8601 format. */
    send_time?: string | undefined;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: Campaign.Settings | undefined;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    social_card?: Campaign.SocialCard | undefined;
    /** The current status of the campaign. */
    status?: Campaign.Status | undefined;
    tracking?: Mailchimp.CampaignTrackingOptions | undefined;
    /** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
    type: Campaign.Type;
    /** The settings specific to A/B test campaigns. */
    variate_settings?: Campaign.VariateSettings | undefined;
    /** The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    web_id?: number | undefined;
}

export namespace Campaign {
    export type Links = Links.Item[];

    export namespace Links {
        /**
         * This object represents a link from the resource where it is found to another resource or action that may be performed.
         */
        export interface Item {
            /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
            href?: string | undefined;
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            method?: Item.Method | undefined;
            /** As with an HTML 'rel' attribute, this describes the type of link. */
            rel?: string | undefined;
            /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
            schema?: string | undefined;
            /** For GETs, this is a URL representing the schema that the response should conform to. */
            targetSchema?: string | undefined;
        }

        export namespace Item {
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            export const Method = {
                Get: "GET",
                Post: "POST",
                Put: "PUT",
                Patch: "PATCH",
                Delete: "DELETE",
                Options: "OPTIONS",
                Head: "HEAD",
            } as const;
            export type Method = (typeof Method)[keyof typeof Method];
        }
    }

    /**
     * Updates on campaigns in the process of sending.
     */
    export interface DeliveryStatus {
        /** Whether a campaign send can be canceled. */
        can_cancel?: boolean | undefined;
        /** The total number of emails canceled for this campaign. */
        emails_canceled?: number | undefined;
        /** The total number of emails confirmed sent for this campaign so far. */
        emails_sent?: number | undefined;
        /** Whether Campaign Delivery Status is enabled for this account and campaign. */
        enabled?: boolean | undefined;
        /** The current state of a campaign delivery. */
        status?: DeliveryStatus.Status | undefined;
    }

    export namespace DeliveryStatus {
        /** The current state of a campaign delivery. */
        export const Status = {
            Delivering: "delivering",
            Delivered: "delivered",
            Canceling: "canceling",
            Canceled: "canceled",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }

    /**
     * List settings for the campaign.
     */
    export interface Recipients {
        /** The unique list id. */
        list_id: string;
        /** The name of the list. */
        list_name?: string | undefined;
        /** Count of the recipients on the associated list. Formatted as an integer. */
        recipient_count?: number | undefined;
        /** An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options. */
        segment_opts?: Recipients.SegmentOpts | undefined;
        /** A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML. */
        segment_text?: string | undefined;
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
     * For sent campaigns, a summary of opens and clicks.
     */
    export interface ReportSummary {
        /** The number of unique clicks divided by the total number of successful deliveries. */
        click_rate?: number | undefined;
        /** The total number of clicks for an campaign. */
        clicks?: number | undefined;
        /** E-Commerce stats for a campaign. */
        ecommerce?: ReportSummary.Ecommerce | undefined;
        /** The number of unique opens divided by the total number of successful deliveries. */
        open_rate?: number | undefined;
        /** The total number of opens for a campaign. */
        opens?: number | undefined;
        /** The number of unique clicks. */
        subscriber_clicks?: number | undefined;
        /** The number of unique opens. */
        unique_opens?: number | undefined;
    }

    export namespace ReportSummary {
        /**
         * E-Commerce stats for a campaign.
         */
        export interface Ecommerce {
            /** The total orders for a campaign. */
            total_orders?: number | undefined;
            /** The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals. */
            total_revenue?: number | undefined;
            /** The total spent for a campaign. Calculated as the sum of all order totals with no deductions. */
            total_spent?: number | undefined;
        }
    }

    /**
     * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign.
     */
    export interface RssOpts {
        /** Whether to add CSS to images in the RSS feed to constrain their width in campaigns. */
        constrain_rss_img?: boolean | undefined;
        /** The URL for the RSS feed. */
        feed_url: string;
        /** The frequency of the RSS Campaign. */
        frequency: RssOpts.Frequency;
        /** The date the campaign was last sent. */
        last_sent?: string | undefined;
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
        /** Whether the campaign uses the drag-and-drop editor. */
        drag_and_drop?: boolean | undefined;
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
        /** The id for the template used in this campaign. */
        template_id?: number | undefined;
        /** Send this campaign using [Timewarp](https://mailchimp.com/help/use-timewarp/). */
        timewarp?: boolean | undefined;
        /** The title of the campaign. */
        title?: string | undefined;
        /** The campaign's custom 'To' name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/). */
        to_name?: string | undefined;
        /** Use Mailchimp Conversation feature to manage replies. */
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

    /** The current status of the campaign. */
    export const Status = {
        Save: "save",
        Paused: "paused",
        Schedule: "schedule",
        Sending: "sending",
        Sent: "sent",
        Canceled: "canceled",
        Canceling: "canceling",
        Archived: "archived",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
    /** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
    export const Type = {
        Regular: "regular",
        Plaintext: "plaintext",
        Absplit: "absplit",
        Rss: "rss",
        Variate: "variate",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];

    /**
     * The settings specific to A/B test campaigns.
     */
    export interface VariateSettings {
        /** Combinations of possible variables used to build emails. */
        combinations?: VariateSettings.Combinations.Item[] | undefined;
        /** Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'. */
        contents?: string[] | undefined;
        /** The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used. */
        from_names?: string[] | undefined;
        /** The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used. */
        reply_to_addresses?: string[] | undefined;
        /** The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored. */
        send_times?: string[] | undefined;
        /** The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used. */
        subject_lines?: string[] | undefined;
        /** The percentage of recipients to send the test combinations to, must be a value between 10 and 100. */
        test_size?: number | undefined;
        /** The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes. */
        wait_time?: number | undefined;
        /** The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. */
        winner_criteria: VariateSettings.WinnerCriteria;
        /** ID of the campaign that was sent to the remaining recipients based on the winning combination. */
        winning_campaign_id?: string | undefined;
        /** ID for the winning combination. */
        winning_combination_id?: string | undefined;
    }

    export namespace VariateSettings {
        export type Combinations = Combinations.Item[];

        export namespace Combinations {
            export interface Item {
                /** The index of `variate_settings.contents` used. */
                content_description?: number | undefined;
                /** The index of `variate_settings.from_names` used. */
                from_name?: number | undefined;
                /** Unique ID for the combination. */
                id?: string | undefined;
                /** The number of recipients for this combination. */
                recipients?: number | undefined;
                /** The index of `variate_settings.reply_to_addresses` used. */
                reply_to?: number | undefined;
                /** The index of `variate_settings.send_times` used. */
                send_time?: number | undefined;
                /** The index of `variate_settings.subject_lines` used. */
                subject_line?: number | undefined;
            }
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

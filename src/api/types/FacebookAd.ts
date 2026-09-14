//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface FacebookAd {
    /** The date and time the outreach was canceled in ISO 8601 format. */
    canceled_at?: string | undefined;
    /** The date and time the outreach was created in ISO 8601 format. */
    create_time?: string | undefined;
    /** If this outreach targets a segment of your audience. */
    has_segment?: boolean | undefined;
    /** Unique ID of an Outreach. */
    id?: string | undefined;
    /** Title or name of an Outreach. */
    name?: string | undefined;
    /** The date and time the outreach was (or will be) published in ISO 8601 format. */
    published_time?: string | undefined;
    /** High level audience information for who the outreach targets. */
    recipients?: FacebookAd.Recipients | undefined;
    /** High level reporting stats for an outreach. */
    report_summary?: FacebookAd.ReportSummary | undefined;
    /** Outreach report availability. Note: This property is hotly debated in what it _should_ convey. See [MCP-1371](https://jira.mailchimp.com/browse/MCP-1371) for more context. */
    show_report?: boolean | undefined;
    /** The date and time the outreach was started in ISO 8601 format. */
    start_time?: string | undefined;
    /** The status of this outreach. */
    status?: FacebookAd.Status | undefined;
    /** The type of outreach this object is. */
    type?: FacebookAd.Type | undefined;
    /** The date and time the outreach was last updated in ISO 8601 format. */
    updated_at?: string | undefined;
    /** The ID used in the Mailchimp web application. For example, for a `regular` outreach, you can view this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    web_id?: number | undefined;
}

export namespace FacebookAd {
    /**
     * High level audience information for who the outreach targets.
     */
    export interface Recipients {
        /** The unique list id. */
        list_id?: string | undefined;
        /** The status of the list used, namely if it's deleted or disabled. */
        list_is_active?: boolean | undefined;
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
     * High level reporting stats for an outreach.
     */
    export interface ReportSummary {
        click_rate?: number | undefined;
        clicks?: number | undefined;
        conversion_rate?: number | undefined;
        ecommerce?: ReportSummary.Ecommerce | undefined;
        engagements?: number | undefined;
        impressions?: number | undefined;
        open_rate?: number | undefined;
        opens?: number | undefined;
        proxy_excluded_open_rate?: number | undefined;
        proxy_excluded_opens?: number | undefined;
        proxy_excluded_unique_opens?: number | undefined;
        reach?: number | undefined;
        subscriber_clicks?: number | undefined;
        subscribes?: number | undefined;
        total_sent?: number | undefined;
        unique_opens?: number | undefined;
        unique_visits?: number | undefined;
        visits?: number | undefined;
    }

    export namespace ReportSummary {
        export interface Ecommerce {
            average_order_revenue?: number | undefined;
            currency_code?: string | undefined;
            total_revenue?: number | undefined;
        }
    }

    /** The status of this outreach. */
    export const Status = {
        Save: "save",
        Paused: "paused",
        Schedule: "schedule",
        Scheduled: "scheduled",
        Sending: "sending",
        Sent: "sent",
        Canceled: "canceled",
        Canceling: "canceling",
        Active: "active",
        Disconnected: "disconnected",
        Somepaused: "somepaused",
        Draft: "draft",
        Completed: "completed",
        PartialRejected: "partialRejected",
        Pending: "pending",
        Rejected: "rejected",
        Published: "published",
        Unpublished: "unpublished",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
    /** The type of outreach this object is. */
    export const Type = {
        Regular: "regular",
        EmailTouchpoint: "email-touchpoint",
        Plaintext: "plaintext",
        Rss: "rss",
        Reconfirm: "reconfirm",
        Variate: "variate",
        Absplit: "absplit",
        Automation: "automation",
        Facebook: "facebook",
        Google: "google",
        Autoresponder: "autoresponder",
        Transactional: "transactional",
        Page: "page",
        Website: "website",
        SocialPost: "social_post",
        Survey: "survey",
        CustomerJourney: "customer_journey",
        Sms: "sms",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual Automation workflow email.
 */
export interface AutomationWorkflowEmail {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: AutomationWorkflowEmail.Links.Item[] | undefined;
    /** The link to the campaign's archive version in ISO 8601 format. */
    archive_url?: string | undefined;
    /** How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url'). */
    content_type?: string | undefined;
    /** The date and time the campaign was created in ISO 8601 format. */
    create_time?: string | undefined;
    /** The delay settings for an Automation email. */
    delay?: AutomationWorkflowEmail.Delay | undefined;
    /** The total number of emails sent for this campaign. */
    emails_sent?: number | undefined;
    /** Determines if the campaign contains the *|BRAND:LOGO|* merge tag. */
    has_logo_merge_tag?: boolean | undefined;
    /** A string that uniquely identifies the Automation email. */
    id?: string | undefined;
    /** Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor. */
    needs_block_refresh?: boolean | undefined;
    /** The position of an Automation email in a workflow. */
    position?: number | undefined;
    /** List settings for the campaign. */
    recipients?: AutomationWorkflowEmail.Recipients | undefined;
    /** For sent campaigns, a summary of opens and clicks. */
    report_summary?: AutomationWorkflowEmail.ReportSummary | undefined;
    /**  The date and time a campaign was sent in ISO 8601 format */
    send_time?: string | undefined;
    /** Settings for the campaign including the email subject, from name, and from email address. */
    settings?: AutomationWorkflowEmail.Settings | undefined;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    social_card?: AutomationWorkflowEmail.SocialCard | undefined;
    /** The date and time the campaign was started in ISO 8601 format. */
    start_time?: string | undefined;
    /** The current status of the campaign. */
    status?: AutomationWorkflowEmail.Status | undefined;
    /** The tracking options for a campaign. */
    tracking?: AutomationWorkflowEmail.Tracking | undefined;
    /** Available triggers for Automation workflows. */
    trigger_settings?: AutomationWorkflowEmail.TriggerSettings | undefined;
    /** The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    web_id?: number | undefined;
    /** A string that uniquely identifies an Automation workflow. */
    workflow_id?: string | undefined;
}

export namespace AutomationWorkflowEmail {
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
     * The delay settings for an Automation email.
     */
    export interface Delay {
        /** The action that triggers the delay of an Automation email. */
        action?: Delay.Action | undefined;
        /** The user-friendly description of the action that triggers an Automation email. */
        action_description?: string | undefined;
        /** The delay amount for an Automation email. */
        amount?: number | undefined;
        /** Whether the delay settings describe before or after the delay action of an Automation email. */
        direction?: Delay.Direction | undefined;
        /** The user-friendly description of the delay and trigger action settings for an Automation email. */
        full_description?: string | undefined;
        /** The type of delay for an Automation email. */
        type?: Delay.Type | undefined;
    }

    export namespace Delay {
        /** The action that triggers the delay of an Automation email. */
        export const Action = {
            PreviousCampaignSent: "previous_campaign_sent",
            PreviousCampaignOpened: "previous_campaign_opened",
            PreviousCampaignNotOpened: "previous_campaign_not_opened",
            PreviousCampaignClickedAny: "previous_campaign_clicked_any",
            PreviousCampaignNotClickedAny: "previous_campaign_not_clicked_any",
            PreviousCampaignSpecificClicked: "previous_campaign_specific_clicked",
            EcommBoughtAny: "ecomm_bought_any",
            EcommBoughtProduct: "ecomm_bought_product",
            EcommBoughtCategory: "ecomm_bought_category",
            EcommNotBoughtAny: "ecomm_not_bought_any",
            EcommAbandonedCart: "ecomm_abandoned_cart",
            CampaignSent: "campaign_sent",
            OpenedEmail: "opened_email",
            NotOpenedEmail: "not_opened_email",
            ClickedEmail: "clicked_email",
            NotClickedEmail: "not_clicked_email",
            CampaignSpecificClicked: "campaign_specific_clicked",
            Manual: "manual",
            Signup: "signup",
            MergeChanged: "merge_changed",
            GroupAdd: "group_add",
            GroupRemove: "group_remove",
            MandrillSent: "mandrill_sent",
            MandrillOpened: "mandrill_opened",
            MandrillClicked: "mandrill_clicked",
            MandrillAny: "mandrill_any",
            Api: "api",
            Goal: "goal",
            Annual: "annual",
            Birthday: "birthday",
            Date: "date",
            DateAdded: "date_added",
            TagAdd: "tag_add",
        } as const;
        export type Action = (typeof Action)[keyof typeof Action];
        /** Whether the delay settings describe before or after the delay action of an Automation email. */
        export const Direction = {
            Before: "before",
            After: "after",
        } as const;
        export type Direction = (typeof Direction)[keyof typeof Direction];
        /** The type of delay for an Automation email. */
        export const Type = {
            Now: "now",
            Day: "day",
            Hour: "hour",
            Week: "week",
        } as const;
        export type Type = (typeof Type)[keyof typeof Type];
    }

    /**
     * List settings for the campaign.
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
        /** A description of the [segment](https://mailchimp.com/help/getting-started-with-groups/) used for the campaign. Formatted as a string marked up with HTML. */
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
        /** The number of unique opens divided by the total number of successful deliveries. */
        open_rate?: number | undefined;
        /** The total number of opens for a campaign. */
        opens?: number | undefined;
        /** The number of unique clicks. */
        subscriber_clicks?: number | undefined;
        /** The number of unique opens. */
        unique_opens?: number | undefined;
    }

    /**
     * Settings for the campaign including the email subject, from name, and from email address.
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
        /** The title of the campaign. */
        title?: string | undefined;
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
        Sending: "sending",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    /**
     * The tracking options for a campaign.
     */
    export interface Tracking {
        /** Deprecated */
        capsule?: Tracking.Capsule | undefined;
        /** The custom slug for [Click Tale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes). */
        clicktale?: string | undefined;
        /** Whether to enable e-commerce tracking. */
        ecomm360?: boolean | undefined;
        /** Deprecated */
        goal_tracking?: boolean | undefined;
        /** The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes). */
        google_analytics?: string | undefined;
        /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`. */
        html_clicks?: boolean | undefined;
        /** Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. */
        opens?: boolean | undefined;
        /** Deprecated */
        salesforce?: Tracking.Salesforce | undefined;
        /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`. */
        text_clicks?: boolean | undefined;
    }

    export namespace Tracking {
        /**
         * Deprecated
         */
        export interface Capsule {
            /** Update contact notes for a campaign based on a subscriber's email address. */
            notes?: boolean | undefined;
        }

        /**
         * Deprecated
         */
        export interface Salesforce {
            /** Create a campaign in a connected Salesforce account. */
            campaign?: boolean | undefined;
            /** Update contact notes for a campaign based on a subscriber's email address. */
            notes?: boolean | undefined;
        }
    }

    /**
     * Available triggers for Automation workflows.
     */
    export interface TriggerSettings {
        /** A workflow's runtime settings for an Automation. */
        runtime?: TriggerSettings.Runtime | undefined;
        /** The number of emails in the Automation workflow. */
        workflow_emails_count?: number | undefined;
        /** The title of the workflow type. */
        workflow_title?: string | undefined;
        /** The type of Automation workflow. */
        workflow_type: TriggerSettings.WorkflowType;
    }

    export namespace TriggerSettings {
        /**
         * A workflow's runtime settings for an Automation.
         */
        export interface Runtime {
            /** The days an Automation workflow can send. */
            days?: Runtime.Days.Item[] | undefined;
            /** The hours an Automation workflow can send. */
            hours?: Runtime.Hours | undefined;
        }

        export namespace Runtime {
            export type Days = Days.Item[];

            export namespace Days {
                export const Item = {
                    Sunday: "sunday",
                    Monday: "monday",
                    Tuesday: "tuesday",
                    Wednesday: "wednesday",
                    Thursday: "thursday",
                    Friday: "friday",
                    Saturday: "saturday",
                } as const;
                export type Item = (typeof Item)[keyof typeof Item];
            }

            /**
             * The hours an Automation workflow can send.
             */
            export interface Hours {
                /** When to send the Automation email. */
                type: Hours.Type;
            }

            export namespace Hours {
                /** When to send the Automation email. */
                export const Type = {
                    SendAsap: "send_asap",
                    SendBetween: "send_between",
                    SendAt: "send_at",
                } as const;
                export type Type = (typeof Type)[keyof typeof Type];
            }
        }

        /** The type of Automation workflow. */
        export const WorkflowType = {
            AbandonedBrowse: "abandonedBrowse",
            AbandonedCart: "abandonedCart",
            Api: "api",
            BestCustomers: "bestCustomers",
            CategoryFollowup: "categoryFollowup",
            DateAdded: "dateAdded",
            EmailFollowup: "emailFollowup",
            EmailSeries: "emailSeries",
            GroupAdd: "groupAdd",
            GroupRemove: "groupRemove",
            Mandrill: "mandrill",
            ProductFollowup: "productFollowup",
            PurchaseFollowup: "purchaseFollowup",
            RecurringEvent: "recurringEvent",
            SpecialEvent: "specialEvent",
            VisitUrl: "visitUrl",
            WelcomeSeries: "welcomeSeries",
        } as const;
        export type WorkflowType = (typeof WorkflowType)[keyof typeof WorkflowType];
    }
}

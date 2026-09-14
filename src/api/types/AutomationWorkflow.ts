//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual Automation workflow's settings and content.
 */
export interface AutomationWorkflow {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: AutomationWorkflow.Links.Item[] | undefined;
    /** The date and time the Automation was created in ISO 8601 format. */
    create_time?: string | undefined;
    /** The total number of emails sent for the Automation. */
    emails_sent?: number | undefined;
    /** A string that identifies the Automation. */
    id?: string | undefined;
    /** List settings for the Automation. */
    recipients?: AutomationWorkflow.Recipients | undefined;
    /** A summary of opens and clicks for sent campaigns. */
    report_summary?: AutomationWorkflow.ReportSummary | undefined;
    /** The settings for the Automation workflow. */
    settings?: AutomationWorkflow.Settings | undefined;
    /** The date and time the Automation was started in ISO 8601 format. */
    start_time?: string | undefined;
    /** The current status of the Automation. */
    status?: AutomationWorkflow.Status | undefined;
    /** The tracking options for the Automation. */
    tracking?: AutomationWorkflow.Tracking | undefined;
    /** Available triggers for Automation workflows. */
    trigger_settings?: AutomationWorkflow.TriggerSettings | undefined;
}

export namespace AutomationWorkflow {
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
     * List settings for the Automation.
     */
    export interface Recipients {
        /** The unique list id. */
        list_id?: string | undefined;
        /** The status of the list used, namely if it's deleted or disabled. */
        list_is_active?: boolean | undefined;
        /** List Name. */
        list_name?: string | undefined;
        segment_opts?: Mailchimp.SegmentType | undefined;
        /** The id of the store. */
        store_id?: string | undefined;
    }

    /**
     * A summary of opens and clicks for sent campaigns.
     */
    export interface ReportSummary {
        /** The number of unique clicks, divided by the total number of successful deliveries. */
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
     * The settings for the Automation workflow.
     */
    export interface Settings {
        /** Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`. */
        authenticate?: boolean | undefined;
        /** Whether to automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation. */
        auto_footer?: boolean | undefined;
        /** The 'from' name for the Automation (not an email address). */
        from_name?: string | undefined;
        /** Whether to automatically inline the CSS included with the Automation content. */
        inline_css?: boolean | undefined;
        /** The reply-to email address for the Automation. */
        reply_to?: string | undefined;
        /** The title of the Automation. */
        title?: string | undefined;
        /** The Automation's custom 'To' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/). */
        to_name?: string | undefined;
        /** Whether to use Mailchimp Conversation feature to manage replies */
        use_conversation?: boolean | undefined;
    }

    /** The current status of the Automation. */
    export const Status = {
        Save: "save",
        Paused: "paused",
        Sending: "sending",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    /**
     * The tracking options for the Automation.
     */
    export interface Tracking {
        /** Deprecated */
        capsule?: Tracking.Capsule | undefined;
        /** The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes). */
        clicktale?: string | undefined;
        /** Whether to enable e-commerce tracking. */
        ecomm360?: boolean | undefined;
        /** Deprecated */
        goal_tracking?: boolean | undefined;
        /** The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes). */
        google_analytics?: string | undefined;
        /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`. */
        html_clicks?: boolean | undefined;
        /** Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`. */
        opens?: boolean | undefined;
        /** Deprecated */
        salesforce?: Tracking.Salesforce | undefined;
        /** Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`. */
        text_clicks?: boolean | undefined;
    }

    export namespace Tracking {
        /**
         * Deprecated
         */
        export interface Capsule {
            /** Update contact notes for a campaign based on a subscriber's email addresses. */
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

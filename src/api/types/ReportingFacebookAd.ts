//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface ReportingFacebookAd {
    email_source_name?: string | undefined;
    /** The date and time the ad was ended in ISO 8601 format. */
    end_time?: string | undefined;
    /** If the ad has a problem and needs attention. */
    needs_attention?: boolean | undefined;
    /** The date and time the ad was paused in ISO 8601 format. */
    paused_at?: string | undefined;
    /** The URL of the thumbnail for this outreach. */
    thumbnail?: string | undefined;
    was_canceled_by_facebook?: boolean | undefined;
    /** Audience settings */
    audience?: ReportingFacebookAd.Audience | undefined;
    audience_activity?: ReportingFacebookAd.AudienceActivity | undefined;
    budget?: ReportingFacebookAd.Budget | undefined;
    /** Channel settings */
    channel?: ReportingFacebookAd.Channel | undefined;
    /** Report summary of facebook ad */
    report_summary?: ReportingFacebookAd.ReportSummary | undefined;
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ReportingFacebookAd.Links.Item[] | undefined;
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
    recipients?: ReportingFacebookAd.Recipients | undefined;
    /** Outreach report availability. Note: This property is hotly debated in what it _should_ convey. See [MCP-1371](https://jira.mailchimp.com/browse/MCP-1371) for more context. */
    show_report?: boolean | undefined;
    /** The date and time the outreach was started in ISO 8601 format. */
    start_time?: string | undefined;
    /** The status of this outreach. */
    status?: ReportingFacebookAd.Status | undefined;
    /** The type of outreach this object is. */
    type?: ReportingFacebookAd.Type | undefined;
    /** The date and time the outreach was last updated in ISO 8601 format. */
    updated_at?: string | undefined;
    /** The ID used in the Mailchimp web application. For example, for a `regular` outreach, you can view this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    web_id?: number | undefined;
}

export namespace ReportingFacebookAd {
    /**
     * Audience settings
     */
    export interface Audience {
        email_source?: Audience.EmailSource | undefined;
        /** To include list contacts as part of audience */
        include_source_in_target?: boolean | undefined;
        /** To find similar audience in given country */
        lookalike_country_code?: string | undefined;
        /** List or Facebook based audience */
        source_type?: Audience.SourceType | undefined;
        targeting_specs?: Audience.TargetingSpecs | undefined;
        /** Type of the audience */
        type?: Audience.Type | undefined;
    }

    export namespace Audience {
        export interface EmailSource {
            /** Is the source reference a segment */
            is_segment?: boolean | undefined;
            /** Associated list name to the source */
            list_name?: string | undefined;
            /** Email source name */
            name?: string | undefined;
            /** Segment type if this source is tied to a segment */
            segment_type?: string | undefined;
            /** Type of the email source */
            type?: string | undefined;
        }

        /** List or Facebook based audience */
        export const SourceType = {
            Facebook: "facebook",
            List: "list",
        } as const;
        export type SourceType = (typeof SourceType)[keyof typeof SourceType];

        export interface TargetingSpecs {
            gender?: number | undefined;
            interests?: TargetingSpecs.Interests.Item[] | undefined;
            locations?: TargetingSpecs.Locations | undefined;
            max_age?: number | undefined;
            min_age?: number | undefined;
        }

        export namespace TargetingSpecs {
            export type Interests = Interests.Item[];

            export namespace Interests {
                export interface Item {
                    name?: string | undefined;
                }
            }

            export interface Locations {
                cities?: string[] | undefined;
                countries?: string[] | undefined;
                regions?: string[] | undefined;
                zips?: string[] | undefined;
            }
        }

        /** Type of the audience */
        export const Type = {
            CustomAudience: "Custom Audience",
            LookalikeAudience: "Lookalike Audience",
            InterestBasedAudience: "Interest-based Audience",
        } as const;
        export type Type = (typeof Type)[keyof typeof Type];
    }

    export interface AudienceActivity {
        clicks?: AudienceActivity.Clicks.Item[] | undefined;
        impressions?: AudienceActivity.Impressions.Item[] | undefined;
        revenue?: AudienceActivity.Revenue.Item[] | undefined;
    }

    export namespace AudienceActivity {
        export type Clicks = Clicks.Item[];

        export namespace Clicks {
            export interface Item {
                clicks?: number | undefined;
                date?: string | undefined;
            }
        }

        export type Impressions = Impressions.Item[];

        export namespace Impressions {
            export interface Item {
                date?: string | undefined;
                impressions?: number | undefined;
            }
        }

        export type Revenue = Revenue.Item[];

        export namespace Revenue {
            export interface Item {
                date?: string | undefined;
                revenue?: number | undefined;
            }
        }
    }

    export interface Budget {
        /** Currency code */
        currency_code?: string | undefined;
        /** Duration of the ad in seconds */
        duration?: number | undefined;
        /** Total budget of the ad */
        total_amount?: number | undefined;
    }

    /**
     * Channel settings
     */
    export interface Channel {
        /** Is this for facebook audience */
        fb_placement_audience?: boolean | undefined;
        /** Is this for facebook feed */
        fb_placement_feed?: boolean | undefined;
        /** Is this for instagram feed */
        ig_placement_feed?: boolean | undefined;
    }

    /**
     * Report summary of facebook ad
     */
    export interface ReportSummary {
        average_daily_budget?: ReportSummary.AverageDailyBudget | undefined;
        average_order_amount?: ReportSummary.AverageOrderAmount | undefined;
        click_rate?: number | undefined;
        clicks?: number | undefined;
        comments?: number | undefined;
        cost_per_click?: ReportSummary.CostPerClick | undefined;
        ecommerce?: ReportSummary.Ecommerce | undefined;
        extended_at?: ReportSummary.ExtendedAt | undefined;
        first_time_buyers?: number | undefined;
        has_extended_ad_duration?: boolean | undefined;
        impressions?: number | undefined;
        likes?: number | undefined;
        reach?: number | undefined;
        return_on_investment?: number | undefined;
        shares?: number | undefined;
        total_orders?: number | undefined;
        total_products_sold?: number | undefined;
        unique_clicks?: number | undefined;
    }

    export namespace ReportSummary {
        export interface AverageDailyBudget {
            amount?: number | undefined;
            currency_code?: string | undefined;
        }

        export interface AverageOrderAmount {
            amount?: number | undefined;
            currency_code?: string | undefined;
        }

        export interface CostPerClick {
            amount?: number | undefined;
            currency_code?: string | undefined;
        }

        export interface Ecommerce {
            currency_code?: string | undefined;
            total_revenue?: number | undefined;
        }

        export interface ExtendedAt {
            datetime?: string | undefined;
            timezone?: string | undefined;
        }
    }

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

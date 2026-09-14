//  This file was auto-generated from our API Definition.

/**
 * A summary of an individual landing page's settings and content.
 */
export interface LandingPageReport {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: LandingPageReport.Links.Item[] | undefined;
    /** The number of clicks to this landing pages. */
    clicks?: number | undefined;
    /** The percentage of people who visited your landing page and were added to your list. */
    conversion_rate?: number | undefined;
    ecommerce?: LandingPageReport.Ecommerce | undefined;
    /** A string that uniquely identifies this landing page. */
    id?: string | undefined;
    /** The list id connected to this landing page. */
    list_id?: string | undefined;
    /** List Name */
    list_name?: string | undefined;
    /** The name of this landing page the user will see. */
    name?: string | undefined;
    /** The time this landing page was published. */
    published_at?: string | undefined;
    /** A list of tags associated to the landing page. */
    signup_tags?: LandingPageReport.SignupTags.Item[] | undefined;
    /** The status of the landing page. */
    status?: string | undefined;
    /** The number of subscribes to this landing pages. */
    subscribes?: number | undefined;
    timeseries?: LandingPageReport.Timeseries | undefined;
    /** The name of the landing page the user's customers will see. */
    title?: string | undefined;
    /** The number of unique visits to this landing pages. */
    unique_visits?: number | undefined;
    /** The time this landing page was unpublished. */
    unpublished_at?: string | undefined;
    /** The landing page url. */
    url?: string | undefined;
    /** The number of visits to this landing pages. */
    visits?: number | undefined;
    /** The ID used in the Mailchimp web application. */
    web_id?: number | undefined;
}

export namespace LandingPageReport {
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

    export interface Ecommerce {
        /** The average order revenue of this landing page. */
        average_order_revenue?: number | undefined;
        /** The user's currency code. */
        currency_code?: string | undefined;
        /** The total number of orders associated with this landing page. */
        total_orders?: number | undefined;
        /** The total revenue of this landing page. */
        total_revenue?: number | undefined;
    }

    export type SignupTags = SignupTags.Item[];

    export namespace SignupTags {
        export interface Item {
            /** The unique id for the tag. */
            tag_id?: number | undefined;
            /** The name of the tag. */
            tag_name?: string | undefined;
        }
    }

    export interface Timeseries {
        /** The clicks and visits data from the last seven days. */
        daily_stats?: Timeseries.DailyStats | undefined;
        /** The clicks and visits data from the last five weeks. */
        weekly_stats?: Timeseries.WeeklyStats | undefined;
    }

    export namespace Timeseries {
        /**
         * The clicks and visits data from the last seven days.
         */
        export interface DailyStats {
            clicks?: DailyStats.Clicks.Item[] | undefined;
            unique_visits?: DailyStats.UniqueVisits.Item[] | undefined;
            visits?: DailyStats.Visits.Item[] | undefined;
        }

        export namespace DailyStats {
            export type Clicks = Clicks.Item[];

            export namespace Clicks {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }

            export type UniqueVisits = UniqueVisits.Item[];

            export namespace UniqueVisits {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }

            export type Visits = Visits.Item[];

            export namespace Visits {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }
        }

        /**
         * The clicks and visits data from the last five weeks.
         */
        export interface WeeklyStats {
            /** The total number of clicks in a week. */
            clicks?: WeeklyStats.Clicks.Item[] | undefined;
            unique_visits?: WeeklyStats.UniqueVisits.Item[] | undefined;
            /** The total number of visits in a week. */
            visits?: WeeklyStats.Visits.Item[] | undefined;
        }

        export namespace WeeklyStats {
            export type Clicks = Clicks.Item[];

            export namespace Clicks {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }

            export type UniqueVisits = UniqueVisits.Item[];

            export namespace UniqueVisits {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }

            export type Visits = Visits.Item[];

            export namespace Visits {
                export interface Item {
                    date?: string | undefined;
                    val?: number | undefined;
                }
            }
        }
    }
}

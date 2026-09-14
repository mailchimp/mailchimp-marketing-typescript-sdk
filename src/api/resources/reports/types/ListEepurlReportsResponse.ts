//  This file was auto-generated from our API Definition.

/**
 * A summary of social activity for the campaign, tracked by EepURL.
 */
export interface ListEepurlReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListEepurlReportsResponse.Links.Item[] | undefined;
    /** The unique id for the campaign. */
    campaign_id?: string | undefined;
    /** A summary of the click-throughs on the campaign's URL. */
    clicks?: ListEepurlReportsResponse.Clicks | undefined;
    /** The shortened link used for tracking. */
    eepurl?: string | undefined;
    /** A summary of the top referrers for the campaign. */
    referrers?: ListEepurlReportsResponse.Referrers.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
    /** A summary of Twitter activity for a campaign. */
    twitter?: ListEepurlReportsResponse.Twitter | undefined;
}

export namespace ListEepurlReportsResponse {
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
     * A summary of the click-throughs on the campaign's URL.
     */
    export interface Clicks {
        /** The total number of clicks to the campaign's URL. */
        clicks?: number | undefined;
        /** The timestamp for the first click to the URL. */
        first_click?: string | undefined;
        /** The timestamp for the last click to the URL. */
        last_click?: string | undefined;
        /** A summary of the top click locations. */
        locations?: Clicks.Locations.Item[] | undefined;
    }

    export namespace Clicks {
        export type Locations = Locations.Item[];

        export namespace Locations {
            /**
             * An individual click location.
             */
            export interface Item {
                /** The two-digit country code for a recorded click. */
                country?: string | undefined;
                /** If available, a specific region where the click was recorded. */
                region?: string | undefined;
            }
        }
    }

    export type Referrers = Referrers.Item[];

    export namespace Referrers {
        /**
         * A single instance of a campaign referral.
         */
        export interface Item {
            /** The number of clicks a single referrer generated. */
            clicks?: number | undefined;
            /** The timestamp for the first click from this referrer. */
            first_click?: string | undefined;
            /** The timestamp for the last click from this referrer. */
            last_click?: string | undefined;
            /** A referrer (truncated to 100 bytes). */
            referrer?: string | undefined;
        }
    }

    /**
     * A summary of Twitter activity for a campaign.
     */
    export interface Twitter {
        /** The day and time of the first recorded tweet with a link to the campaign. */
        first_tweet?: string | undefined;
        /** The day and time of the last recorded tweet with a link to the campaign. */
        last_tweet?: string | undefined;
        /** The number of retweets that include a link to the campaign. */
        retweets?: number | undefined;
        /** A summary of tweets that include a link to the campaign. */
        statuses?: Twitter.Statuses.Item[] | undefined;
        /** The number of tweets including a link to the campaign. */
        tweets?: number | undefined;
    }

    export namespace Twitter {
        export type Statuses = Statuses.Item[];

        export namespace Statuses {
            /**
             * An individual tweet.
             */
            export interface Item {
                /** A timestamp for the tweet. */
                datetime?: string | undefined;
                /** A 'true' or 'false' status of whether the tweet is a retweet. */
                is_retweet?: boolean | undefined;
                /** The Twitter handle for the author of the tweet. */
                screen_name?: string | undefined;
                /** The body of the tweet. */
                status?: string | undefined;
                /** The individual id for the tweet. */
                status_id?: string | undefined;
            }
        }
    }
}

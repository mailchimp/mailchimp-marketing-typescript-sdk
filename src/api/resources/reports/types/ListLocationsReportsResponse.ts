//  This file was auto-generated from our API Definition.

/**
 * Top open locations for a specific campaign.
 */
export interface ListLocationsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListLocationsReportsResponse.Links.Item[] | undefined;
    /** The campaign id. */
    campaign_id?: string | undefined;
    /** An array of objects, each representing a top location for opens. */
    locations?: ListLocationsReportsResponse.Locations.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListLocationsReportsResponse {
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

    export type Locations = Locations.Item[];

    export namespace Locations {
        export interface Item {
            /** The ISO 3166 2 digit country code. */
            country_code?: string | undefined;
            /** The number of unique campaign opens for a region. */
            opens?: number | undefined;
            /** The number of unique campaign opens for a region excluding opens from email clients that use proxies. */
            proxy_excluded_opens?: number | undefined;
            /** An internal code for the region representing the more specific location area such as city or state. When this is blank, it indicates we know the country, but not the region. */
            region?: string | undefined;
            /** The name of the region, if we have one. For blank "region" values, this will be "Rest of Country". */
            region_name?: string | undefined;
        }
    }
}

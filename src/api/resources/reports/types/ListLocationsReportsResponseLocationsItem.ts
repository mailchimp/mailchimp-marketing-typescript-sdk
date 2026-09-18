//  This file was auto-generated from our API Definition.

export interface ListLocationsReportsResponseLocationsItem {
    /** The ISO 3166 2 digit country code. */
    countryCode?: string;
    /** The number of unique campaign opens for a region. */
    opens?: number;
    /** The number of unique campaign opens for a region excluding opens from email clients that use proxies. */
    proxyExcludedOpens?: number;
    /** An internal code for the region representing the more specific location area such as city or state. When this is blank, it indicates we know the country, but not the region. */
    region?: string;
    /** The name of the region, if we have one. For blank "region" values, this will be "Rest of Country". */
    regionName?: string;
}

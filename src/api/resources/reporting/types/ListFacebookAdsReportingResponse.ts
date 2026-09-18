//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of Facebook ads.
 */
export interface ListFacebookAdsReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFacebookAdsReportingResponseLinksItem[];
    facebookAds?: Mailchimp.ReportingFacebookAd[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

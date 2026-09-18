//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Contains an array of facebook ads.
 */
export interface ListFacebookAdsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFacebookAdsResponseLinksItem[];
    facebookAds?: Mailchimp.FacebookAds[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}

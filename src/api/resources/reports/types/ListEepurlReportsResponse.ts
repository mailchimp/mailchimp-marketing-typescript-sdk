//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of social activity for the campaign, tracked by EepURL.
 */
export interface ListEepurlReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListEepurlReportsResponseLinksItem[];
    /** The unique id for the campaign. */
    campaignId?: string;
    /** A summary of the click-throughs on the campaign's URL. */
    clicks?: Mailchimp.ListEepurlReportsResponseClicks;
    /** The shortened link used for tracking. */
    eepurl?: string;
    /** A summary of the top referrers for the campaign. */
    referrers?: Mailchimp.ListEepurlReportsResponseReferrersItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** A summary of Twitter activity for a campaign. */
    twitter?: Mailchimp.ListEepurlReportsResponseTwitter;
}

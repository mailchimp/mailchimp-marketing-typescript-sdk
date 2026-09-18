//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A report of links clicked in a specific campaign.
 */
export interface ClickDetailReport {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ClickDetailReportLinksItem[];
    /** A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns. */
    abSplit?: Mailchimp.ClickDetailReportAbSplit;
    /** The campaign id. */
    campaignId?: string;
    /** The percentage of total clicks a link generated for a campaign. */
    clickPercentage?: number;
    /** The unique id for the link. */
    id?: string;
    /** The date and time for the last recorded click for a link in ISO 8601 format. */
    lastClick?: Date;
    /** The number of total clicks for a link. */
    totalClicks?: number;
    /** The percentage of unique clicks a link generated for a campaign. */
    uniqueClickPercentage?: number;
    /** Number of unique clicks for a link. */
    uniqueClicks?: number;
    /** The URL for the link in the campaign. */
    url?: string;
}

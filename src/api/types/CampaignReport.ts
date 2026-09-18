//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Report details about a sent campaign.
 */
export interface CampaignReport {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.CampaignReportLinksItem[];
    /** General stats about different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns. */
    abSplit?: Mailchimp.CampaignReportAbSplit;
    /** The number of abuse reports generated for this campaign. */
    abuseReports?: number;
    /** An object describing the bounce summary for the campaign. */
    bounces?: Mailchimp.CampaignReportBounces;
    /** The title of the campaign. */
    campaignTitle?: string;
    /** An object describing the click activity for the campaign. */
    clicks?: Mailchimp.CampaignReportClicks;
    /** Updates on campaigns in the process of sending. */
    deliveryStatus?: Mailchimp.CampaignReportDeliveryStatus;
    /** E-Commerce stats for a campaign. */
    ecommerce?: Mailchimp.CampaignReportEcommerce;
    /** The total number of emails sent for this campaign. */
    emailsSent?: number;
    /** An object describing campaign engagement on Facebook. */
    facebookLikes?: Mailchimp.CampaignReportFacebookLikes;
    /** An object describing the forwards and forward activity for the campaign. */
    forwards?: Mailchimp.CampaignReportForwards;
    /** A string that uniquely identifies this campaign. */
    id?: string;
    /** The average campaign statistics for your industry. */
    industryStats?: Mailchimp.CampaignReportIndustryStats;
    /** The unique list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** The name of the list. */
    listName?: string;
    /** The average campaign statistics for your list. This won't be present if we haven't calculated it yet for this list. */
    listStats?: Mailchimp.CampaignReportListStats;
    /** An object describing the open activity for the campaign. */
    opens?: Mailchimp.CampaignReportOpens;
    /** The preview text for the campaign. */
    previewText?: string;
    /** For RSS campaigns, the date and time of the last send in ISO 8601 format. */
    rssLastSend?: Date;
    /** The date and time a campaign was sent in ISO 8601 format. */
    sendTime?: Date;
    /** The url and password for the [VIP report](https://mailchimp.com/help/share-a-campaign-report/). */
    shareReport?: Mailchimp.CampaignReportShareReport;
    /** The subject line for the campaign. */
    subjectLine?: string;
    /** An hourly breakdown of the performance of the campaign over the first 24 hours. */
    timeseries?: Mailchimp.CampaignReportTimeseriesItem[];
    /** An hourly breakdown of sends, opens, and clicks if a campaign is sent using timewarp. */
    timewarp?: Mailchimp.CampaignReportTimewarpItem[];
    /** The type of campaign (regular, plain-text, ab_split, rss, automation, variate, or auto). */
    type?: string;
    /** The total number of unsubscribed members for this campaign. */
    unsubscribed?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual campaign's settings and content.
 */
export interface Campaign {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.CampaignLinksItem[];
    abSplitOpts?: Mailchimp.AbTestingOptions;
    /** The link to the campaign's archive version. */
    archiveUrl?: string;
    /** How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url'). */
    contentType?: string;
    /** The date and time the campaign was created in ISO 8601 format. */
    createTime?: Date;
    /** Updates on campaigns in the process of sending. */
    deliveryStatus?: Mailchimp.CampaignDeliveryStatus;
    /** The total number of emails sent for this campaign. */
    emailsSent?: number;
    /** A string that uniquely identifies this campaign. */
    id?: string;
    /** The original link to the campaign's archive version. */
    longArchiveUrl?: string;
    /** Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false. */
    needsBlockRefresh?: boolean;
    /** If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children. */
    parentCampaignId?: string;
    /** List settings for the campaign. */
    recipients?: Mailchimp.CampaignRecipients;
    /** For sent campaigns, a summary of opens and clicks. */
    reportSummary?: Mailchimp.CampaignReportSummary;
    /** Determines if the campaign qualifies to be resent to non-openers. */
    resendable?: boolean;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign. */
    rssOpts?: Mailchimp.CampaignRssOpts;
    /** The date and time a campaign was sent in ISO 8601 format. */
    sendTime?: Date;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: Mailchimp.CampaignSettings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    socialCard?: Mailchimp.CampaignSocialCard;
    /** The current status of the campaign. */
    status?: Mailchimp.CampaignStatus;
    tracking?: Mailchimp.CampaignTrackingOptions;
    /** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
    type: Mailchimp.CampaignType;
    /** The settings specific to A/B test campaigns. */
    variateSettings?: Mailchimp.CampaignVariateSettings;
    /** The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
}

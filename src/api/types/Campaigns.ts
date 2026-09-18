//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual campaign's settings and content.
 */
export interface Campaigns {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.CampaignsLinksItem[];
    abSplitOpts?: Mailchimp.AbTestingOptions;
    /** The link to the campaign's archive version in ISO 8601 format. */
    archiveUrl?: string;
    /** How the campaign's content is put together. */
    contentType?: Mailchimp.CampaignsContentType;
    /** The date and time the campaign was created in ISO 8601 format. */
    createTime?: Date;
    /** Updates on campaigns in the process of sending. */
    deliveryStatus?: Mailchimp.CampaignsDeliveryStatus;
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
    recipients?: Mailchimp.CampaignsRecipients;
    /** For sent campaigns, a summary of opens, clicks, and e-commerce data. */
    reportSummary?: Mailchimp.CampaignsReportSummary;
    /** Determines if the campaign qualifies for the Campaign Resend Shortcuts. Only included when query parameter `include_resend_shortcuts` is `true`. */
    resendShortcutEligibility?: Mailchimp.CampaignsResendShortcutEligibility;
    /** Information about campaigns related through shortcuts. */
    resendShortcutUsage?: Mailchimp.CampaignsResendShortcutUsage;
    /** Determines if the campaign qualifies to be resent to non-openers. */
    resendable?: boolean;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign. */
    rssOpts?: Mailchimp.CampaignsRssOpts;
    /** The date and time a campaign was sent. */
    sendTime?: Date;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: Mailchimp.CampaignsSettings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    socialCard?: Mailchimp.CampaignsSocialCard;
    /** The current status of the campaign. */
    status?: Mailchimp.CampaignsStatus;
    tracking?: Mailchimp.CampaignTrackingOptions;
    /** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
    type?: Mailchimp.CampaignsType;
    /** The settings specific to A/B test campaigns. */
    variateSettings?: Mailchimp.CampaignsVariateSettings;
    /** The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
}

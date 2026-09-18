//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface ReportingFacebookAd {
    emailSourceName?: string;
    /** The date and time the ad was ended in ISO 8601 format. */
    endTime?: Date;
    /** If the ad has a problem and needs attention. */
    needsAttention?: boolean;
    /** The date and time the ad was paused in ISO 8601 format. */
    pausedAt?: Date;
    /** The URL of the thumbnail for this outreach. */
    thumbnail?: string;
    wasCanceledByFacebook?: boolean;
    /** Audience settings */
    audience?: Mailchimp.ReportingFacebookAdAudience;
    audienceActivity?: Mailchimp.ReportingFacebookAdAudienceActivity;
    budget?: Mailchimp.ReportingFacebookAdBudget;
    /** Channel settings */
    channel?: Mailchimp.ReportingFacebookAdChannel;
    /** Report summary of facebook ad */
    reportSummary?: Mailchimp.ReportingFacebookAdReportSummary;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ReportingFacebookAdLinksItem[];
    /** The date and time the outreach was canceled in ISO 8601 format. */
    canceledAt?: Date;
    /** The date and time the outreach was created in ISO 8601 format. */
    createTime?: Date;
    /** If this outreach targets a segment of your audience. */
    hasSegment?: boolean;
    /** Unique ID of an Outreach. */
    id?: string;
    /** Title or name of an Outreach. */
    name?: string;
    /** The date and time the outreach was (or will be) published in ISO 8601 format. */
    publishedTime?: Date;
    /** High level audience information for who the outreach targets. */
    recipients?: Mailchimp.FacebookAdRecipients;
    /** Outreach report availability. Note: This property is hotly debated in what it _should_ convey. See [MCP-1371](https://jira.mailchimp.com/browse/MCP-1371) for more context. */
    showReport?: boolean;
    /** The date and time the outreach was started in ISO 8601 format. */
    startTime?: Date;
    /** The status of this outreach. */
    status?: Mailchimp.FacebookAdStatus;
    /** The type of outreach this object is. */
    type?: Mailchimp.FacebookAdType;
    /** The date and time the outreach was last updated in ISO 8601 format. */
    updatedAt?: Date;
    /** The ID used in the Mailchimp web application. For example, for a `regular` outreach, you can view this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface FacebookAds extends Mailchimp.FacebookAd {
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
    audience?: Mailchimp.FacebookAdsAudience;
    budget?: Mailchimp.FacebookAdsBudget;
    /** Channel settings */
    channel?: Mailchimp.FacebookAdsChannel;
    content?: Mailchimp.FacebookAdsContent;
    /** Check if this ad is connected to a facebook page */
    feedback?: Mailchimp.FacebookAdsFeedback;
    /** Check if this ad has audience setup */
    hasAudience?: boolean;
    /** Check if this ad has content */
    hasContent?: boolean;
    /** Check if this ad is connected to a facebook page */
    isConnected?: boolean;
    /** Connected Site */
    site?: Mailchimp.FacebookAdsSite;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.FacebookAdsLinksItem[];
}

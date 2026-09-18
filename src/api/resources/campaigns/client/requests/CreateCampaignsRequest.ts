//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         type: "regular"
 *     }
 */
export interface CreateCampaignsRequest {
    /** How the campaign's content is put together. The old drag and drop editor uses 'template' while the new editor uses 'multichannel'. Defaults to template. */
    contentType?: Mailchimp.CreateCampaignsRequestContentType;
    /** List settings for the campaign. */
    recipients?: Mailchimp.CreateCampaignsRequestRecipients;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options, specific to an RSS campaign. */
    rssOpts?: Mailchimp.CreateCampaignsRequestRssOpts;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: Mailchimp.CreateCampaignsRequestSettings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    socialCard?: Mailchimp.CreateCampaignsRequestSocialCard;
    tracking?: Mailchimp.CampaignTrackingOptions;
    /** There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. */
    type: Mailchimp.CreateCampaignsRequestType;
    /** The settings specific to A/B test campaigns. */
    variateSettings?: Mailchimp.CreateCampaignsRequestVariateSettings;
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaignId: "campaign_id"
 *     }
 */
export interface UpdateCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** List settings for the campaign. */
    recipients?: Mailchimp.UpdateCampaignsRequestRecipients;
    /** [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign. */
    rssOpts?: Mailchimp.UpdateCampaignsRequestRssOpts;
    /** The settings for your campaign, including subject, from name, reply-to address, and more. */
    settings?: Mailchimp.UpdateCampaignsRequestSettings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    socialCard?: Mailchimp.UpdateCampaignsRequestSocialCard;
    tracking?: Mailchimp.CampaignTrackingOptions;
    /** The settings specific to A/B test campaigns. */
    variateSettings?: Mailchimp.UpdateCampaignsRequestVariateSettings;
}

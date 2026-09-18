//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign.
 */
export interface UpdateCampaignsRequestRssOpts {
    /** Whether to add CSS to images in the RSS feed to constrain their width in campaigns. */
    constrainRssImg?: boolean;
    /** The URL for the RSS feed. */
    feedUrl?: string;
    /** The frequency of the RSS Campaign. */
    frequency?: Mailchimp.UpdateCampaignsRequestRssOptsFrequency;
    /** The schedule for sending the RSS Campaign. */
    schedule?: Mailchimp.UpdateCampaignsRequestRssOptsSchedule;
}

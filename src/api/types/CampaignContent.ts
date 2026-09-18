//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The HTML and plain-text content for a campaign.
 */
export interface CampaignContent {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.CampaignContentLinksItem[];
    /** The Archive HTML for the campaign. */
    archiveHtml?: string;
    /** The raw HTML for the campaign. */
    html?: string;
    /** The plain-text portion of the campaign. If left unspecified, we'll generate this automatically. */
    plainText?: string;
    /** Content options for multivariate campaigns. */
    variateContents?: Mailchimp.CampaignContentVariateContentsItem[];
}

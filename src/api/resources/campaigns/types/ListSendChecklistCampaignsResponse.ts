//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The send checklist for the campaign.
 */
export interface ListSendChecklistCampaignsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSendChecklistCampaignsResponseLinksItem[];
    /** Whether the campaign is ready to send. */
    isReady?: boolean;
    /** A list of feedback items to review before sending your campaign. */
    items?: Mailchimp.ListSendChecklistCampaignsResponseItemsItem[];
}

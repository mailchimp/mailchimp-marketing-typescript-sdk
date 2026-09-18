//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         body: {}
 *     }
 */
export interface UpsertContentCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    body: Mailchimp.CampaignContent;
}

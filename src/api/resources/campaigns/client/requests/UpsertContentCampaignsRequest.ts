//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaign_id: "campaign_id",
 *         body: {}
 *     }
 */
export interface UpsertContentCampaignsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    body: Mailchimp.CampaignContent;
}

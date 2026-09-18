//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         smsCampaignId: "sms_campaign_id",
 *         messageBody: "message_body"
 *     }
 */
export interface UpsertContentSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    smsCampaignId: string;
    /** The SMS message body. */
    messageBody: string;
    /** Attached images or files. Limited to one item. Omitting this field or sending an empty array removes any existing media; to keep the current media while updating other fields, re-send the media array. */
    media?: Mailchimp.UpsertContentSmsCampaignsRequestMediaItem[];
}

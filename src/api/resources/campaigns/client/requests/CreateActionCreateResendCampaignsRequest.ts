//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaignId: "campaign_id"
 *     }
 */
export interface CreateActionCreateResendCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** Which campaign resend shortcut to use. Default is `to_non_openers`. */
    shortcutType?: Mailchimp.CreateActionCreateResendCampaignsRequestShortcutType;
}

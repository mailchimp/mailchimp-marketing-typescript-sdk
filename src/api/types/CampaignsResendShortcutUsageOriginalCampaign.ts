//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The original campaign that was resent.
 */
export interface CampaignsResendShortcutUsageOriginalCampaign {
    /** ID for the resent campaign. */
    id?: string;
    /** Which campaign resend shortcut was used. */
    shortcutType?: Mailchimp.CampaignsResendShortcutUsageOriginalCampaignShortcutType;
    /** The title of the original campaign. */
    title?: string;
    /** The ID for the resent campaign used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
}

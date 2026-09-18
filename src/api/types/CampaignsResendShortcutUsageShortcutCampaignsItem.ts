//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export interface CampaignsResendShortcutUsageShortcutCampaignsItem {
    /** Unique ID for the resent campaign. */
    id?: string;
    /** The date and time a resent campaign was sent. */
    sendTime?: Date;
    /** Which campaign resend shortcut was used. */
    shortcutType?: Mailchimp.CampaignsResendShortcutUsageShortcutCampaignsItemShortcutType;
    /** The current status of the campaign. */
    status?: Mailchimp.CampaignsResendShortcutUsageShortcutCampaignsItemStatus;
    /** The ID for the resent campaign used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
}

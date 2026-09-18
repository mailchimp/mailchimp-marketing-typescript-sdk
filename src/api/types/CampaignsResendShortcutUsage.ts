//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about campaigns related through shortcuts.
 */
export interface CampaignsResendShortcutUsage {
    /** The original campaign that was resent. */
    originalCampaign?: Mailchimp.CampaignsResendShortcutUsageOriginalCampaign;
    /** Campaigns that were created from Campaign Resend Shortcuts for this campaign */
    shortcutCampaigns?: Mailchimp.CampaignsResendShortcutUsageShortcutCampaignsItem[];
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Determines if the campaign qualifies for the Campaign Resend Shortcuts. Only included when query parameter `include_resend_shortcuts` is `true`.
 */
export interface CampaignsResendShortcutEligibility {
    /** Determines if the campaign qualifies to be resent to new subscribers. */
    toNewSubscribers?: Mailchimp.CampaignsResendShortcutEligibilityToNewSubscribers;
    /** Determines if the campaign qualifies to be resent to non-clickers. */
    toNonClickers?: Mailchimp.CampaignsResendShortcutEligibilityToNonClickers;
    /** Determines if the campaign qualifies to be resent to non-openers. */
    toNonOpeners?: Mailchimp.CampaignsResendShortcutEligibilityToNonOpeners;
    /** Determines if the campaign qualifies to be resent to non-purchasers. */
    toNonPurchasers?: Mailchimp.CampaignsResendShortcutEligibilityToNonPurchasers;
}

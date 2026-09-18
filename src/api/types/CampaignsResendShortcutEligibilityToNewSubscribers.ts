//  This file was auto-generated from our API Definition.

/**
 * Determines if the campaign qualifies to be resent to new subscribers.
 */
export interface CampaignsResendShortcutEligibilityToNewSubscribers {
    /** Determines if the campaign qualifies to be resent to this segment. */
    isEligible?: boolean;
    /** The reason the campaign is not eligible to be resent to this segment. */
    reason?: string;
}

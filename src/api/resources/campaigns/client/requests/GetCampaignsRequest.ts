//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaignId: "campaign_id"
 *     }
 */
export interface GetCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered. */
    includeResendShortcutEligibility?: boolean;
    /** Return the `resend_shortcut_usage` field in the response.  This includes information about campaigns related by a shortcut. */
    includeResendShortcutUsage?: boolean;
}

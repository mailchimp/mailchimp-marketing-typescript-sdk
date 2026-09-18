//  This file was auto-generated from our API Definition.

/**
 * An object describing the bounce summary for the campaign.
 */
export interface CampaignReportBounces {
    /** The total number of hard bounced email addresses. */
    hardBounces?: number;
    /** The total number of soft bounced email addresses. */
    softBounces?: number;
    /** The total number of addresses that were syntax-related bounces. */
    syntaxErrors?: number;
}

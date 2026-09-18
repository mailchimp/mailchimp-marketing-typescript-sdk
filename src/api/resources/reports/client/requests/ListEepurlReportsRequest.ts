//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaignId: "campaign_id"
 *     }
 */
export interface ListEepurlReportsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         smsCampaignId: "sms_campaign_id"
 *     }
 */
export interface GetSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    smsCampaignId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}

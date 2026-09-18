//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         smsCampaignId: "sms_campaign_id"
 *     }
 */
export interface UpdateSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    smsCampaignId: string;
    /** The name of the campaign. */
    name?: string;
    /** The ID of the folder to place this campaign in. */
    folderId?: string;
    /** The segment IDs to target for this campaign. */
    segments?: number[];
    /** The segment IDs to exclude from this campaign. */
    excludedSegments?: number[];
}

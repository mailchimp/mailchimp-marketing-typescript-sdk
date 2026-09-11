//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         sms_campaign_id: "sms_campaign_id"
 *     }
 */
export interface UpdateSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    sms_campaign_id: string;
    /** The name of the campaign. */
    name?: string;
    /** The ID of the folder to place this campaign in. */
    folder_id?: string;
    /** The segment IDs to target for this campaign. */
    segments?: number[];
    /** The segment IDs to exclude from this campaign. */
    excluded_segments?: number[];
}

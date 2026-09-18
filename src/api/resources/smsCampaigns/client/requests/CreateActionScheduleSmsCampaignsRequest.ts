//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         smsCampaignId: "sms_campaign_id",
 *         scheduleTime: new Date("2024-01-15T09:30:00.000Z")
 *     }
 */
export interface CreateActionScheduleSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    smsCampaignId: string;
    /** The UTC date and time to schedule the campaign. */
    scheduleTime: Date;
}

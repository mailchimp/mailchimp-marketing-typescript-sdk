//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaign_id: "campaign_id",
 *         feedback_id: "feedback_id"
 *     }
 */
export interface GetFeedbackCampaignsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    /** The unique id for the feedback message. */
    feedback_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}

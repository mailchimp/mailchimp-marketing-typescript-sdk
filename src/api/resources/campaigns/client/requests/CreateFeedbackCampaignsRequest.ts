//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaign_id: "campaign_id",
 *         message: "message"
 *     }
 */
export interface CreateFeedbackCampaignsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    /** The block id for the editable block that the feedback addresses. */
    block_id?: number;
    /** The status of feedback. */
    is_complete?: boolean;
    /** The content of the feedback. */
    message: string;
}

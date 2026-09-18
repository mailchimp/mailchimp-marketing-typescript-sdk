//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         message: "message"
 *     }
 */
export interface CreateFeedbackCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** The block id for the editable block that the feedback addresses. */
    blockId?: number;
    /** The status of feedback. */
    isComplete?: boolean;
    /** The content of the feedback. */
    message: string;
}

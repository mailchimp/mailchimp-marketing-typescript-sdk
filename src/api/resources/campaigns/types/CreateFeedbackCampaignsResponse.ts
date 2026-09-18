//  This file was auto-generated from our API Definition.

/**
 * A specific feedback message from a specific campaign.
 */
export interface CreateFeedbackCampaignsResponse {
    /** The block id for the editable block that the feedback addresses. */
    blockId?: number;
    /** The status of feedback. */
    isComplete?: boolean;
    /** The content of the feedback. */
    message: string;
}

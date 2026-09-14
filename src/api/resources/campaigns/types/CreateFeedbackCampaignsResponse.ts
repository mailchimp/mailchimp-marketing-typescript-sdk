//  This file was auto-generated from our API Definition.

/**
 * A specific feedback message from a specific campaign.
 */
export interface CreateFeedbackCampaignsResponse {
    /** The block id for the editable block that the feedback addresses. */
    block_id?: number | undefined;
    /** The status of feedback. */
    is_complete?: boolean | undefined;
    /** The content of the feedback. */
    message: string;
}

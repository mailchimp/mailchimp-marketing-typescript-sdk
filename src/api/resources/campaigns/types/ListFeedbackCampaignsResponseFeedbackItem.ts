//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A specific feedback message from a specific campaign.
 */
export interface ListFeedbackCampaignsResponseFeedbackItem {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFeedbackCampaignsResponseFeedbackItemLinksItem[];
    /** The block id for the editable block that the feedback addresses. */
    blockId?: number;
    /** The unique id for the campaign. */
    campaignId?: string;
    /** The date and time the feedback item was created in ISO 8601 format. */
    createdAt?: Date;
    /** The login name of the user who created the feedback. */
    createdBy?: string;
    /** The individual id for the feedback item. */
    feedbackId?: number;
    /** The status of feedback. */
    isComplete?: boolean;
    /** The content of the feedback. */
    message: string;
    /** If a reply, the id of the parent feedback item. */
    parentId?: number;
    /** The source of the feedback. */
    source?: Mailchimp.ListFeedbackCampaignsResponseFeedbackItemSource;
    /** The date and time the feedback was last updated in ISO 8601 format. */
    updatedAt?: Date;
}

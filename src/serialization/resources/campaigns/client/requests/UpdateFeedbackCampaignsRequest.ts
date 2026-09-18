//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateFeedbackCampaignsRequest: core.serialization.Schema<
    serializers.UpdateFeedbackCampaignsRequest.Raw,
    Omit<Mailchimp.UpdateFeedbackCampaignsRequest, "campaignId" | "feedbackId">
> = core.serialization.object({
    blockId: core.serialization.property("block_id", core.serialization.number().optional()),
    isComplete: core.serialization.property("is_complete", core.serialization.boolean().optional()),
    message: core.serialization.string().optional(),
});

export declare namespace UpdateFeedbackCampaignsRequest {
    export interface Raw {
        block_id?: number | null;
        is_complete?: boolean | null;
        message?: string | null;
    }
}

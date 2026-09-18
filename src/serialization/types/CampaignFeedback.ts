//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignFeedbackLinksItem } from "./CampaignFeedbackLinksItem.js";
import { CampaignFeedbackSource } from "./CampaignFeedbackSource.js";

export const CampaignFeedback: core.serialization.ObjectSchema<
    serializers.CampaignFeedback.Raw,
    Mailchimp.CampaignFeedback
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(CampaignFeedbackLinksItem).optional()),
    blockId: core.serialization.property("block_id", core.serialization.number().optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    feedbackId: core.serialization.property("feedback_id", core.serialization.number().optional()),
    isComplete: core.serialization.property("is_complete", core.serialization.boolean().optional()),
    message: core.serialization.string().optional(),
    parentId: core.serialization.property("parent_id", core.serialization.number().optional()),
    source: CampaignFeedbackSource.optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace CampaignFeedback {
    export interface Raw {
        _links?: CampaignFeedbackLinksItem.Raw[] | null;
        block_id?: number | null;
        campaign_id?: string | null;
        created_at?: string | null;
        created_by?: string | null;
        feedback_id?: number | null;
        is_complete?: boolean | null;
        message?: string | null;
        parent_id?: number | null;
        source?: CampaignFeedbackSource.Raw | null;
        updated_at?: string | null;
    }
}

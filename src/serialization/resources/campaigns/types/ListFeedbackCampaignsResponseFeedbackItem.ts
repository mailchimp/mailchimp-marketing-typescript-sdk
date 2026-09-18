//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFeedbackCampaignsResponseFeedbackItemLinksItem } from "./ListFeedbackCampaignsResponseFeedbackItemLinksItem.js";
import { ListFeedbackCampaignsResponseFeedbackItemSource } from "./ListFeedbackCampaignsResponseFeedbackItemSource.js";

export const ListFeedbackCampaignsResponseFeedbackItem: core.serialization.ObjectSchema<
    serializers.ListFeedbackCampaignsResponseFeedbackItem.Raw,
    Mailchimp.ListFeedbackCampaignsResponseFeedbackItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFeedbackCampaignsResponseFeedbackItemLinksItem).optional(),
    ),
    blockId: core.serialization.property("block_id", core.serialization.number().optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    feedbackId: core.serialization.property("feedback_id", core.serialization.number().optional()),
    isComplete: core.serialization.property("is_complete", core.serialization.boolean().optional()),
    message: core.serialization.string(),
    parentId: core.serialization.property("parent_id", core.serialization.number().optional()),
    source: ListFeedbackCampaignsResponseFeedbackItemSource.optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace ListFeedbackCampaignsResponseFeedbackItem {
    export interface Raw {
        _links?: ListFeedbackCampaignsResponseFeedbackItemLinksItem.Raw[] | null;
        block_id?: number | null;
        campaign_id?: string | null;
        created_at?: string | null;
        created_by?: string | null;
        feedback_id?: number | null;
        is_complete?: boolean | null;
        message: string;
        parent_id?: number | null;
        source?: ListFeedbackCampaignsResponseFeedbackItemSource.Raw | null;
        updated_at?: string | null;
    }
}

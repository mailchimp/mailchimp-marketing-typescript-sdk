//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFeedbackCampaignsResponseFeedbackItem } from "./ListFeedbackCampaignsResponseFeedbackItem.js";
import { ListFeedbackCampaignsResponseLinksItem } from "./ListFeedbackCampaignsResponseLinksItem.js";

export const ListFeedbackCampaignsResponse: core.serialization.ObjectSchema<
    serializers.ListFeedbackCampaignsResponse.Raw,
    Mailchimp.ListFeedbackCampaignsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFeedbackCampaignsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    feedback: core.serialization.list(ListFeedbackCampaignsResponseFeedbackItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFeedbackCampaignsResponse {
    export interface Raw {
        _links?: ListFeedbackCampaignsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        feedback?: ListFeedbackCampaignsResponseFeedbackItem.Raw[] | null;
        total_items?: number | null;
    }
}

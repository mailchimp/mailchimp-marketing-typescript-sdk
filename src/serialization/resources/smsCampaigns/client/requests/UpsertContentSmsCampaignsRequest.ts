//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpsertContentSmsCampaignsRequestMediaItem } from "../../types/UpsertContentSmsCampaignsRequestMediaItem.js";

export const UpsertContentSmsCampaignsRequest: core.serialization.Schema<
    serializers.UpsertContentSmsCampaignsRequest.Raw,
    Omit<Mailchimp.UpsertContentSmsCampaignsRequest, "smsCampaignId">
> = core.serialization.object({
    messageBody: core.serialization.property("message_body", core.serialization.string()),
    media: core.serialization.list(UpsertContentSmsCampaignsRequestMediaItem).optional(),
});

export declare namespace UpsertContentSmsCampaignsRequest {
    export interface Raw {
        message_body: string;
        media?: UpsertContentSmsCampaignsRequestMediaItem.Raw[] | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateSmsCampaignsRequest: core.serialization.Schema<
    serializers.UpdateSmsCampaignsRequest.Raw,
    Omit<Mailchimp.UpdateSmsCampaignsRequest, "smsCampaignId">
> = core.serialization.object({
    name: core.serialization.string().optional(),
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    segments: core.serialization.list(core.serialization.number()).optional(),
    excludedSegments: core.serialization.property(
        "excluded_segments",
        core.serialization.list(core.serialization.number()).optional(),
    ),
});

export declare namespace UpdateSmsCampaignsRequest {
    export interface Raw {
        name?: string | null;
        folder_id?: string | null;
        segments?: number[] | null;
        excluded_segments?: number[] | null;
    }
}

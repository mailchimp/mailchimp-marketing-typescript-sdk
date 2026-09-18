//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateSmsCampaignsRequest: core.serialization.Schema<
    serializers.CreateSmsCampaignsRequest.Raw,
    Mailchimp.CreateSmsCampaignsRequest
> = core.serialization.object({
    name: core.serialization.string(),
    listId: core.serialization.property("list_id", core.serialization.number().optional()),
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    segments: core.serialization.list(core.serialization.number()).optional(),
    excludedSegments: core.serialization.property(
        "excluded_segments",
        core.serialization.list(core.serialization.number()).optional(),
    ),
});

export declare namespace CreateSmsCampaignsRequest {
    export interface Raw {
        name: string;
        list_id?: number | null;
        folder_id?: string | null;
        segments?: number[] | null;
        excluded_segments?: number[] | null;
    }
}

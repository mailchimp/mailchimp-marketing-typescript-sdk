//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateCampaignFoldersRequest: core.serialization.Schema<
    serializers.UpdateCampaignFoldersRequest.Raw,
    Omit<Mailchimp.UpdateCampaignFoldersRequest, "folderId">
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace UpdateCampaignFoldersRequest {
    export interface Raw {
        name: string;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateCampaignFoldersRequest: core.serialization.Schema<
    serializers.CreateCampaignFoldersRequest.Raw,
    Mailchimp.CreateCampaignFoldersRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace CreateCampaignFoldersRequest {
    export interface Raw {
        name: string;
    }
}

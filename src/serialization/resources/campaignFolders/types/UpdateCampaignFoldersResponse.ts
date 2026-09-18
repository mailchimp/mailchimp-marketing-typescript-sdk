//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateCampaignFoldersResponseLinksItem } from "./UpdateCampaignFoldersResponseLinksItem.js";

export const UpdateCampaignFoldersResponse: core.serialization.ObjectSchema<
    serializers.UpdateCampaignFoldersResponse.Raw,
    Mailchimp.UpdateCampaignFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(UpdateCampaignFoldersResponseLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateCampaignFoldersResponse {
    export interface Raw {
        _links?: UpdateCampaignFoldersResponseLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}

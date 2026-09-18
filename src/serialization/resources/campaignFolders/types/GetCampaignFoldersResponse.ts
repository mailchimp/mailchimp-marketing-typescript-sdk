//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetCampaignFoldersResponseLinksItem } from "./GetCampaignFoldersResponseLinksItem.js";

export const GetCampaignFoldersResponse: core.serialization.ObjectSchema<
    serializers.GetCampaignFoldersResponse.Raw,
    Mailchimp.GetCampaignFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetCampaignFoldersResponseLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace GetCampaignFoldersResponse {
    export interface Raw {
        _links?: GetCampaignFoldersResponseLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}

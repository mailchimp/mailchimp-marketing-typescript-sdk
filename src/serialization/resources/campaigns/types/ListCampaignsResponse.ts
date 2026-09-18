//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Campaigns } from "../../../types/Campaigns.js";
import { ListCampaignsResponseLinksItem } from "./ListCampaignsResponseLinksItem.js";

export const ListCampaignsResponse: core.serialization.ObjectSchema<
    serializers.ListCampaignsResponse.Raw,
    Mailchimp.ListCampaignsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListCampaignsResponseLinksItem).optional()),
    campaigns: core.serialization.list(Campaigns).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListCampaignsResponse {
    export interface Raw {
        _links?: ListCampaignsResponseLinksItem.Raw[] | null;
        campaigns?: Campaigns.Raw[] | null;
        total_items?: number | null;
    }
}

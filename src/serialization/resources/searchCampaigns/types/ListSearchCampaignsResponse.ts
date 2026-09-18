//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSearchCampaignsResponseLinksItem } from "./ListSearchCampaignsResponseLinksItem.js";
import { ListSearchCampaignsResponseResultsItem } from "./ListSearchCampaignsResponseResultsItem.js";

export const ListSearchCampaignsResponse: core.serialization.ObjectSchema<
    serializers.ListSearchCampaignsResponse.Raw,
    Mailchimp.ListSearchCampaignsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSearchCampaignsResponseLinksItem).optional(),
    ),
    results: core.serialization.list(ListSearchCampaignsResponseResultsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSearchCampaignsResponse {
    export interface Raw {
        _links?: ListSearchCampaignsResponseLinksItem.Raw[] | null;
        results?: ListSearchCampaignsResponseResultsItem.Raw[] | null;
        total_items?: number | null;
    }
}

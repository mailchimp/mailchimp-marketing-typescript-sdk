//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { OpenActivity } from "../../../types/OpenActivity.js";
import { ListOpenDetailsReportsResponseLinksItem } from "./ListOpenDetailsReportsResponseLinksItem.js";

export const ListOpenDetailsReportsResponse: core.serialization.ObjectSchema<
    serializers.ListOpenDetailsReportsResponse.Raw,
    Mailchimp.ListOpenDetailsReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListOpenDetailsReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    members: core.serialization.list(OpenActivity).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    totalOpens: core.serialization.property("total_opens", core.serialization.number().optional()),
    totalProxyExcludedOpens: core.serialization.property(
        "total_proxy_excluded_opens",
        core.serialization.number().optional(),
    ),
});

export declare namespace ListOpenDetailsReportsResponse {
    export interface Raw {
        _links?: ListOpenDetailsReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        members?: OpenActivity.Raw[] | null;
        total_items?: number | null;
        total_opens?: number | null;
        total_proxy_excluded_opens?: number | null;
    }
}

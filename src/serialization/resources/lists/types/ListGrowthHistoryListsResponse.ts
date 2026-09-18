//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GrowthHistory } from "../../../types/GrowthHistory.js";
import { ListGrowthHistoryListsResponseLinksItem } from "./ListGrowthHistoryListsResponseLinksItem.js";

export const ListGrowthHistoryListsResponse: core.serialization.ObjectSchema<
    serializers.ListGrowthHistoryListsResponse.Raw,
    Mailchimp.ListGrowthHistoryListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListGrowthHistoryListsResponseLinksItem).optional(),
    ),
    history: core.serialization.list(GrowthHistory).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListGrowthHistoryListsResponse {
    export interface Raw {
        _links?: ListGrowthHistoryListsResponseLinksItem.Raw[] | null;
        history?: GrowthHistory.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}

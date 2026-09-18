//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListGrowthHistoryListsResponseLinksItemMethod } from "./ListGrowthHistoryListsResponseLinksItemMethod.js";

export const ListGrowthHistoryListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListGrowthHistoryListsResponseLinksItem.Raw,
    Mailchimp.ListGrowthHistoryListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListGrowthHistoryListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListGrowthHistoryListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListGrowthHistoryListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

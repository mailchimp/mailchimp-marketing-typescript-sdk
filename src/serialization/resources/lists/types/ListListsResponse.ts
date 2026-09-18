//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SubscriberList } from "../../../types/SubscriberList.js";
import { ListListsResponseConstraints } from "./ListListsResponseConstraints.js";
import { ListListsResponseLinksItem } from "./ListListsResponseLinksItem.js";

export const ListListsResponse: core.serialization.ObjectSchema<
    serializers.ListListsResponse.Raw,
    Mailchimp.ListListsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListListsResponseLinksItem).optional()),
    constraints: ListListsResponseConstraints.optional(),
    lists: core.serialization.list(SubscriberList),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListListsResponse {
    export interface Raw {
        _links?: ListListsResponseLinksItem.Raw[] | null;
        constraints?: ListListsResponseConstraints.Raw | null;
        lists: SubscriberList.Raw[];
        total_items?: number | null;
    }
}

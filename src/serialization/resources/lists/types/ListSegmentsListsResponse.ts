//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { List } from "../../../types/List.js";
import { ListSegmentsListsResponseLinksItem } from "./ListSegmentsListsResponseLinksItem.js";

export const ListSegmentsListsResponse: core.serialization.ObjectSchema<
    serializers.ListSegmentsListsResponse.Raw,
    Mailchimp.ListSegmentsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSegmentsListsResponseLinksItem).optional(),
    ),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    segments: core.serialization.list(List).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSegmentsListsResponse {
    export interface Raw {
        _links?: ListSegmentsListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        segments?: List.Raw[] | null;
        total_items?: number | null;
    }
}

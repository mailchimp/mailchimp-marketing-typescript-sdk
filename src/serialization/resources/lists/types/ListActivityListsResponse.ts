//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityListsResponseActivityItem } from "./ListActivityListsResponseActivityItem.js";
import { ListActivityListsResponseLinksItem } from "./ListActivityListsResponseLinksItem.js";

export const ListActivityListsResponse: core.serialization.ObjectSchema<
    serializers.ListActivityListsResponse.Raw,
    Mailchimp.ListActivityListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListActivityListsResponseLinksItem).optional(),
    ),
    activity: core.serialization.list(ListActivityListsResponseActivityItem).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListActivityListsResponse {
    export interface Raw {
        _links?: ListActivityListsResponseLinksItem.Raw[] | null;
        activity?: ListActivityListsResponseActivityItem.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}

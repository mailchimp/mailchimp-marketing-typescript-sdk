//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListClientsListsResponseClientsItem } from "./ListClientsListsResponseClientsItem.js";
import { ListClientsListsResponseLinksItem } from "./ListClientsListsResponseLinksItem.js";

export const ListClientsListsResponse: core.serialization.ObjectSchema<
    serializers.ListClientsListsResponse.Raw,
    Mailchimp.ListClientsListsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListClientsListsResponseLinksItem).optional()),
    clients: core.serialization.list(ListClientsListsResponseClientsItem).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListClientsListsResponse {
    export interface Raw {
        _links?: ListClientsListsResponseLinksItem.Raw[] | null;
        clients?: ListClientsListsResponseClientsItem.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}

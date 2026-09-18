//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMembers } from "../../../types/ListMembers.js";
import { ListMembersListsResponseLinksItem } from "./ListMembersListsResponseLinksItem.js";

export const ListMembersListsResponse: core.serialization.ObjectSchema<
    serializers.ListMembersListsResponse.Raw,
    Mailchimp.ListMembersListsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListMembersListsResponseLinksItem).optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    members: core.serialization.list(ListMembers).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMembersListsResponse {
    export interface Raw {
        _links?: ListMembersListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        members?: ListMembers.Raw[] | null;
        total_items?: number | null;
    }
}

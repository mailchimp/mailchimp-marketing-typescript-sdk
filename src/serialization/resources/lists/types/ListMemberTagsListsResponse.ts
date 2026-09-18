//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberTagsListsResponseLinksItem } from "./ListMemberTagsListsResponseLinksItem.js";
import { ListMemberTagsListsResponseTagsItem } from "./ListMemberTagsListsResponseTagsItem.js";

export const ListMemberTagsListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberTagsListsResponse.Raw,
    Mailchimp.ListMemberTagsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberTagsListsResponseLinksItem).optional(),
    ),
    tags: core.serialization.list(ListMemberTagsListsResponseTagsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMemberTagsListsResponse {
    export interface Raw {
        _links?: ListMemberTagsListsResponseLinksItem.Raw[] | null;
        tags?: ListMemberTagsListsResponseTagsItem.Raw[] | null;
        total_items?: number | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTagSearchListsResponseTagsItem } from "./ListTagSearchListsResponseTagsItem.js";

export const ListTagSearchListsResponse: core.serialization.ObjectSchema<
    serializers.ListTagSearchListsResponse.Raw,
    Mailchimp.ListTagSearchListsResponse
> = core.serialization.object({
    tags: core.serialization.list(ListTagSearchListsResponseTagsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListTagSearchListsResponse {
    export interface Raw {
        tags?: ListTagSearchListsResponseTagsItem.Raw[] | null;
        total_items?: number | null;
    }
}

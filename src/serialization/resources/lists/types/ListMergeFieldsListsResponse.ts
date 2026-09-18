//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { MergeField } from "../../../types/MergeField.js";
import { ListMergeFieldsListsResponseLinksItem } from "./ListMergeFieldsListsResponseLinksItem.js";

export const ListMergeFieldsListsResponse: core.serialization.ObjectSchema<
    serializers.ListMergeFieldsListsResponse.Raw,
    Mailchimp.ListMergeFieldsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMergeFieldsListsResponseLinksItem).optional(),
    ),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    mergeFieldLimit: core.serialization.property("merge_field_limit", core.serialization.number().optional()),
    mergeFields: core.serialization.property("merge_fields", core.serialization.list(MergeField).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMergeFieldsListsResponse {
    export interface Raw {
        _links?: ListMergeFieldsListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        merge_field_limit?: number | null;
        merge_fields?: MergeField.Raw[] | null;
        total_items?: number | null;
    }
}

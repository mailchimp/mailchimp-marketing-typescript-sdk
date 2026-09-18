//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberTagsListsResponseTagsItem: core.serialization.ObjectSchema<
    serializers.ListMemberTagsListsResponseTagsItem.Raw,
    Mailchimp.ListMemberTagsListsResponseTagsItem
> = core.serialization.object({
    dateAdded: core.serialization.property("date_added", core.serialization.date().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace ListMemberTagsListsResponseTagsItem {
    export interface Raw {
        date_added?: string | null;
        id?: number | null;
        name?: string | null;
    }
}

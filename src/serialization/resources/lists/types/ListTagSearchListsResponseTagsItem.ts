//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListTagSearchListsResponseTagsItem: core.serialization.ObjectSchema<
    serializers.ListTagSearchListsResponseTagsItem.Raw,
    Mailchimp.ListTagSearchListsResponseTagsItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace ListTagSearchListsResponseTagsItem {
    export interface Raw {
        id?: number | null;
        name?: string | null;
    }
}

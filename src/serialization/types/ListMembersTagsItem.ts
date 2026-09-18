//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersTagsItem: core.serialization.ObjectSchema<
    serializers.ListMembersTagsItem.Raw,
    Mailchimp.ListMembersTagsItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace ListMembersTagsItem {
    export interface Raw {
        id?: number | null;
        name?: string | null;
    }
}

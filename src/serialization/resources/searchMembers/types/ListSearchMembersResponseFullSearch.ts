//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMembers } from "../../../types/ListMembers.js";

export const ListSearchMembersResponseFullSearch: core.serialization.ObjectSchema<
    serializers.ListSearchMembersResponseFullSearch.Raw,
    Mailchimp.ListSearchMembersResponseFullSearch
> = core.serialization.object({
    members: core.serialization.list(ListMembers).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSearchMembersResponseFullSearch {
    export interface Raw {
        members?: ListMembers.Raw[] | null;
        total_items?: number | null;
    }
}

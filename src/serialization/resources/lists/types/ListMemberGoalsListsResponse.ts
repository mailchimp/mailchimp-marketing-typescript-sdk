//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberGoalsListsResponseGoalsItem } from "./ListMemberGoalsListsResponseGoalsItem.js";
import { ListMemberGoalsListsResponseLinksItem } from "./ListMemberGoalsListsResponseLinksItem.js";

export const ListMemberGoalsListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberGoalsListsResponse.Raw,
    Mailchimp.ListMemberGoalsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberGoalsListsResponseLinksItem).optional(),
    ),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    goals: core.serialization.list(ListMemberGoalsListsResponseGoalsItem).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMemberGoalsListsResponse {
    export interface Raw {
        _links?: ListMemberGoalsListsResponseLinksItem.Raw[] | null;
        email_id?: string | null;
        goals?: ListMemberGoalsListsResponseGoalsItem.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}

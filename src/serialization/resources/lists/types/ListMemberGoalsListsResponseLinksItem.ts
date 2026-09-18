//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberGoalsListsResponseLinksItemMethod } from "./ListMemberGoalsListsResponseLinksItemMethod.js";

export const ListMemberGoalsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberGoalsListsResponseLinksItem.Raw,
    Mailchimp.ListMemberGoalsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberGoalsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberGoalsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberGoalsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

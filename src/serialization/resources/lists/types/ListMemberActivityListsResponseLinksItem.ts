//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberActivityListsResponseLinksItemMethod } from "./ListMemberActivityListsResponseLinksItemMethod.js";

export const ListMemberActivityListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberActivityListsResponseLinksItem.Raw,
    Mailchimp.ListMemberActivityListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberActivityListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberActivityListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberActivityListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

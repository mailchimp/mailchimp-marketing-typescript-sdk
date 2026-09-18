//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberTagsListsResponseLinksItemMethod } from "./ListMemberTagsListsResponseLinksItemMethod.js";

export const ListMemberTagsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberTagsListsResponseLinksItem.Raw,
    Mailchimp.ListMemberTagsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberTagsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberTagsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberTagsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

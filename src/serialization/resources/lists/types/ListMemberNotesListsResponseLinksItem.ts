//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMemberNotesListsResponseLinksItemMethod } from "./ListMemberNotesListsResponseLinksItemMethod.js";

export const ListMemberNotesListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMemberNotesListsResponseLinksItem.Raw,
    Mailchimp.ListMemberNotesListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMemberNotesListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMemberNotesListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMemberNotesListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListClientsListsResponseLinksItemMethod } from "./ListClientsListsResponseLinksItemMethod.js";

export const ListClientsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListClientsListsResponseLinksItem.Raw,
    Mailchimp.ListClientsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListClientsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListClientsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListClientsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

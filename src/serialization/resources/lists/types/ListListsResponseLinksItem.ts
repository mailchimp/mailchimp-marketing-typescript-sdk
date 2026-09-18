//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListListsResponseLinksItemMethod } from "./ListListsResponseLinksItemMethod.js";

export const ListListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListListsResponseLinksItem.Raw,
    Mailchimp.ListListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

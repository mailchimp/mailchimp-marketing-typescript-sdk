//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityListsResponseLinksItemMethod } from "./ListActivityListsResponseLinksItemMethod.js";

export const ListActivityListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListActivityListsResponseLinksItem.Raw,
    Mailchimp.ListActivityListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListActivityListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListActivityListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListActivityListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

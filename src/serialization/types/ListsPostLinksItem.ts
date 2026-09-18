//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsPostLinksItemMethod } from "./ListsPostLinksItemMethod.js";

export const ListsPostLinksItem: core.serialization.ObjectSchema<
    serializers.ListsPostLinksItem.Raw,
    Mailchimp.ListsPostLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListsPostLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListsPostLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListsPostLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

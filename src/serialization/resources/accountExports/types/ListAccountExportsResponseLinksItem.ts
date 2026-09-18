//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAccountExportsResponseLinksItemMethod } from "./ListAccountExportsResponseLinksItemMethod.js";

export const ListAccountExportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAccountExportsResponseLinksItem.Raw,
    Mailchimp.ListAccountExportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAccountExportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAccountExportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAccountExportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

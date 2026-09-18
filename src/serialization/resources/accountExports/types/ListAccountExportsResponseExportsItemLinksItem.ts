//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAccountExportsResponseExportsItemLinksItemMethod } from "./ListAccountExportsResponseExportsItemLinksItemMethod.js";

export const ListAccountExportsResponseExportsItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListAccountExportsResponseExportsItemLinksItem.Raw,
    Mailchimp.ListAccountExportsResponseExportsItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAccountExportsResponseExportsItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAccountExportsResponseExportsItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAccountExportsResponseExportsItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

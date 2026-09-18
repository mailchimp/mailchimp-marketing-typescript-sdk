//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListBatchesResponseLinksItemMethod } from "./ListBatchesResponseLinksItemMethod.js";

export const ListBatchesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListBatchesResponseLinksItem.Raw,
    Mailchimp.ListBatchesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListBatchesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListBatchesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListBatchesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

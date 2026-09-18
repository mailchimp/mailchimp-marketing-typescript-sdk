//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListOpenDetailsReportsResponseLinksItemMethod } from "./ListOpenDetailsReportsResponseLinksItemMethod.js";

export const ListOpenDetailsReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListOpenDetailsReportsResponseLinksItem.Raw,
    Mailchimp.ListOpenDetailsReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListOpenDetailsReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListOpenDetailsReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListOpenDetailsReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

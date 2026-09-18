//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSubReportsReportsResponseLinksItemMethod } from "./ListSubReportsReportsResponseLinksItemMethod.js";

export const ListSubReportsReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSubReportsReportsResponseLinksItem.Raw,
    Mailchimp.ListSubReportsReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSubReportsReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSubReportsReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSubReportsReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

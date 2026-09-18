//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListReportsResponseLinksItemMethod } from "./ListReportsResponseLinksItemMethod.js";

export const ListReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListReportsResponseLinksItem.Raw,
    Mailchimp.ListReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

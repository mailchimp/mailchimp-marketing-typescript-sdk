//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAdviceReportsResponseLinksItemMethod } from "./ListAdviceReportsResponseLinksItemMethod.js";

export const ListAdviceReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAdviceReportsResponseLinksItem.Raw,
    Mailchimp.ListAdviceReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAdviceReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAdviceReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAdviceReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

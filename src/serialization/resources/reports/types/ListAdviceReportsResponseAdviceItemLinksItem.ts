//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAdviceReportsResponseAdviceItemLinksItemMethod } from "./ListAdviceReportsResponseAdviceItemLinksItemMethod.js";

export const ListAdviceReportsResponseAdviceItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListAdviceReportsResponseAdviceItemLinksItem.Raw,
    Mailchimp.ListAdviceReportsResponseAdviceItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAdviceReportsResponseAdviceItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAdviceReportsResponseAdviceItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAdviceReportsResponseAdviceItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

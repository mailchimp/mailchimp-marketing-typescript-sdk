//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSegmentsListsResponseLinksItemMethod } from "./ListSegmentsListsResponseLinksItemMethod.js";

export const ListSegmentsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSegmentsListsResponseLinksItem.Raw,
    Mailchimp.ListSegmentsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSegmentsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSegmentsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSegmentsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

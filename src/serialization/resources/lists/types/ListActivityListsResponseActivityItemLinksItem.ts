//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityListsResponseActivityItemLinksItemMethod } from "./ListActivityListsResponseActivityItemLinksItemMethod.js";

export const ListActivityListsResponseActivityItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListActivityListsResponseActivityItemLinksItem.Raw,
    Mailchimp.ListActivityListsResponseActivityItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListActivityListsResponseActivityItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListActivityListsResponseActivityItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListActivityListsResponseActivityItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

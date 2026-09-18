//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMergeFieldsListsResponseLinksItemMethod } from "./ListMergeFieldsListsResponseLinksItemMethod.js";

export const ListMergeFieldsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMergeFieldsListsResponseLinksItem.Raw,
    Mailchimp.ListMergeFieldsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMergeFieldsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMergeFieldsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMergeFieldsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

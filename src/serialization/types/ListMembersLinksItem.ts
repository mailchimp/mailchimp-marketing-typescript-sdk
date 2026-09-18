//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListMembersLinksItemMethod } from "./ListMembersLinksItemMethod.js";

export const ListMembersLinksItem: core.serialization.ObjectSchema<
    serializers.ListMembersLinksItem.Raw,
    Mailchimp.ListMembersLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMembersLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMembersLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMembersLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListConversationsResponseLinksItemMethod } from "./ListConversationsResponseLinksItemMethod.js";

export const ListConversationsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListConversationsResponseLinksItem.Raw,
    Mailchimp.ListConversationsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListConversationsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListConversationsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListConversationsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

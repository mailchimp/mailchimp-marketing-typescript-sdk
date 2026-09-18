//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListMessagesConversationsResponseLinksItemMethod } from "./ListMessagesConversationsResponseLinksItemMethod.js";

export const ListMessagesConversationsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListMessagesConversationsResponseLinksItem.Raw,
    Mailchimp.ListMessagesConversationsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListMessagesConversationsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListMessagesConversationsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListMessagesConversationsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

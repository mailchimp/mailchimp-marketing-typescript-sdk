//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ConversationMessageLinksItemMethod } from "./ConversationMessageLinksItemMethod.js";

export const ConversationMessageLinksItem: core.serialization.ObjectSchema<
    serializers.ConversationMessageLinksItem.Raw,
    Mailchimp.ConversationMessageLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ConversationMessageLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ConversationMessageLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ConversationMessageLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

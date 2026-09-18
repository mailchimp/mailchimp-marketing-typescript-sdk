//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ConversationLinksItemMethod } from "./ConversationLinksItemMethod.js";

export const ConversationLinksItem: core.serialization.ObjectSchema<
    serializers.ConversationLinksItem.Raw,
    Mailchimp.ConversationLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ConversationLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ConversationLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ConversationLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod } from "./ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod.js";

export const ListEmailQueueAutomationsResponseQueueItemLinksItemItem: core.serialization.ObjectSchema<
    serializers.ListEmailQueueAutomationsResponseQueueItemLinksItemItem.Raw,
    Mailchimp.ListEmailQueueAutomationsResponseQueueItemLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEmailQueueAutomationsResponseQueueItemLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: ListEmailQueueAutomationsResponseQueueItemLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

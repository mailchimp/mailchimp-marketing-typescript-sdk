//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEmailQueueAutomationsResponseLinksItemItemMethod } from "./ListEmailQueueAutomationsResponseLinksItemItemMethod.js";

export const ListEmailQueueAutomationsResponseLinksItemItem: core.serialization.ObjectSchema<
    serializers.ListEmailQueueAutomationsResponseLinksItemItem.Raw,
    Mailchimp.ListEmailQueueAutomationsResponseLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEmailQueueAutomationsResponseLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEmailQueueAutomationsResponseLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: ListEmailQueueAutomationsResponseLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

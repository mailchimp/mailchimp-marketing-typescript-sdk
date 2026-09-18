//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListWebhooksLinksItemMethod } from "./ListWebhooksLinksItemMethod.js";

export const ListWebhooksLinksItem: core.serialization.ObjectSchema<
    serializers.ListWebhooksLinksItem.Raw,
    Mailchimp.ListWebhooksLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListWebhooksLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListWebhooksLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListWebhooksLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

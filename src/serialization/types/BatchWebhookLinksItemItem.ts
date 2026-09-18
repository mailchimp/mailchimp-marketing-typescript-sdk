//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { BatchWebhookLinksItemItemMethod } from "./BatchWebhookLinksItemItemMethod.js";

export const BatchWebhookLinksItemItem: core.serialization.ObjectSchema<
    serializers.BatchWebhookLinksItemItem.Raw,
    Mailchimp.BatchWebhookLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: BatchWebhookLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace BatchWebhookLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: BatchWebhookLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

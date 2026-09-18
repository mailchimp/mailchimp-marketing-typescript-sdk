//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListBatchWebhooksResponseLinksItemMethod } from "./ListBatchWebhooksResponseLinksItemMethod.js";

export const ListBatchWebhooksResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListBatchWebhooksResponseLinksItem.Raw,
    Mailchimp.ListBatchWebhooksResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListBatchWebhooksResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListBatchWebhooksResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListBatchWebhooksResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}

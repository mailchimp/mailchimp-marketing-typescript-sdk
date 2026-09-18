//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchWebhook } from "../../../types/BatchWebhook.js";
import { ListBatchWebhooksResponseLinksItem } from "./ListBatchWebhooksResponseLinksItem.js";

export const ListBatchWebhooksResponse: core.serialization.ObjectSchema<
    serializers.ListBatchWebhooksResponse.Raw,
    Mailchimp.ListBatchWebhooksResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListBatchWebhooksResponseLinksItem).optional(),
    ),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    webhooks: core.serialization.list(BatchWebhook).optional(),
});

export declare namespace ListBatchWebhooksResponse {
    export interface Raw {
        _links?: ListBatchWebhooksResponseLinksItem.Raw[] | null;
        total_items?: number | null;
        webhooks?: BatchWebhook.Raw[] | null;
    }
}

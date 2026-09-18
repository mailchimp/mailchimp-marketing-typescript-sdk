//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateBatchWebhooksRequest: core.serialization.Schema<
    serializers.UpdateBatchWebhooksRequest.Raw,
    Omit<Mailchimp.UpdateBatchWebhooksRequest, "batchWebhookId">
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace UpdateBatchWebhooksRequest {
    export interface Raw {
        enabled?: boolean | null;
        url?: string | null;
    }
}

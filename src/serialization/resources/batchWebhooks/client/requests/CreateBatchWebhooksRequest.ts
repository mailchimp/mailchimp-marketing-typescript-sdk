//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateBatchWebhooksRequest: core.serialization.Schema<
    serializers.CreateBatchWebhooksRequest.Raw,
    Mailchimp.CreateBatchWebhooksRequest
> = core.serialization.object({
    enabled: core.serialization.boolean().optional(),
    url: core.serialization.string(),
});

export declare namespace CreateBatchWebhooksRequest {
    export interface Raw {
        enabled?: boolean | null;
        url: string;
    }
}

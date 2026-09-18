//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchWebhook } from "../../../types/BatchWebhook.js";

export const CreateBatchWebhooksResponse: core.serialization.ObjectSchema<
    serializers.CreateBatchWebhooksResponse.Raw,
    Mailchimp.CreateBatchWebhooksResponse
> = core.serialization
    .object({
        signingSecret: core.serialization.property("signing_secret", core.serialization.string().optional()),
    })
    .extend(BatchWebhook);

export declare namespace CreateBatchWebhooksResponse {
    export interface Raw extends BatchWebhook.Raw {
        signing_secret?: string | null;
    }
}

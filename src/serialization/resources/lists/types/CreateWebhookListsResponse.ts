//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListWebhooks } from "../../../types/ListWebhooks.js";

export const CreateWebhookListsResponse: core.serialization.ObjectSchema<
    serializers.CreateWebhookListsResponse.Raw,
    Mailchimp.CreateWebhookListsResponse
> = core.serialization
    .object({
        signingSecret: core.serialization.property("signing_secret", core.serialization.string().optional()),
    })
    .extend(ListWebhooks);

export declare namespace CreateWebhookListsResponse {
    export interface Raw extends ListWebhooks.Raw {
        signing_secret?: string | null;
    }
}

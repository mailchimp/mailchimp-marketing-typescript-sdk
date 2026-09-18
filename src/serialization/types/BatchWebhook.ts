//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { BatchWebhookLinksItemItem } from "./BatchWebhookLinksItemItem.js";

export const BatchWebhook: core.serialization.ObjectSchema<serializers.BatchWebhook.Raw, Mailchimp.BatchWebhook> =
    core.serialization.object({
        links: core.serialization.property(
            "_links",
            core.serialization.list(core.serialization.list(BatchWebhookLinksItemItem)).optional(),
        ),
        enabled: core.serialization.boolean().optional(),
        id: core.serialization.string().optional(),
        signingEnabled: core.serialization.property("signing_enabled", core.serialization.boolean().optional()),
        url: core.serialization.string().optional(),
    });

export declare namespace BatchWebhook {
    export interface Raw {
        _links?: BatchWebhookLinksItemItem.Raw[][] | null;
        enabled?: boolean | null;
        id?: string | null;
        signing_enabled?: boolean | null;
        url?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AddWebhookEvents } from "./AddWebhookEvents.js";
import { AddWebhookSources } from "./AddWebhookSources.js";

export const AddWebhook: core.serialization.ObjectSchema<serializers.AddWebhook.Raw, Mailchimp.AddWebhook> =
    core.serialization.object({
        events: AddWebhookEvents.optional(),
        sources: AddWebhookSources.optional(),
        url: core.serialization.string().optional(),
    });

export declare namespace AddWebhook {
    export interface Raw {
        events?: AddWebhookEvents.Raw | null;
        sources?: AddWebhookSources.Raw | null;
        url?: string | null;
    }
}

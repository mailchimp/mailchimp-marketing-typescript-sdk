//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AddWebhookSources: core.serialization.ObjectSchema<
    serializers.AddWebhookSources.Raw,
    Mailchimp.AddWebhookSources
> = core.serialization.object({
    admin: core.serialization.boolean().optional(),
    api: core.serialization.boolean().optional(),
    user: core.serialization.boolean().optional(),
});

export declare namespace AddWebhookSources {
    export interface Raw {
        admin?: boolean | null;
        api?: boolean | null;
        user?: boolean | null;
    }
}

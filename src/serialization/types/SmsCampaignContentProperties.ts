//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SmsCampaignContentProperties: core.serialization.ObjectSchema<
    serializers.SmsCampaignContentProperties.Raw,
    Mailchimp.SmsCampaignContentProperties
> = core.serialization.object({
    contentType: core.serialization.property("content_type", core.serialization.string().optional()),
    sender: core.serialization.string().optional(),
    optoutMessageLanguage: core.serialization.property(
        "optout_message_language",
        core.serialization.string().optional(),
    ),
});

export declare namespace SmsCampaignContentProperties {
    export interface Raw {
        content_type?: string | null;
        sender?: string | null;
        optout_message_language?: string | null;
    }
}

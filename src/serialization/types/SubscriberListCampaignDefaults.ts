//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SubscriberListCampaignDefaults: core.serialization.ObjectSchema<
    serializers.SubscriberListCampaignDefaults.Raw,
    Mailchimp.SubscriberListCampaignDefaults
> = core.serialization.object({
    fromEmail: core.serialization.property("from_email", core.serialization.string().optional()),
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    language: core.serialization.string().optional(),
    subject: core.serialization.string().optional(),
});

export declare namespace SubscriberListCampaignDefaults {
    export interface Raw {
        from_email?: string | null;
        from_name?: string | null;
        language?: string | null;
        subject?: string | null;
    }
}

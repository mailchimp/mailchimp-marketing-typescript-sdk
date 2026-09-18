//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AddWebhookEvents: core.serialization.ObjectSchema<
    serializers.AddWebhookEvents.Raw,
    Mailchimp.AddWebhookEvents
> = core.serialization.object({
    campaign: core.serialization.boolean().optional(),
    cleaned: core.serialization.boolean().optional(),
    profile: core.serialization.boolean().optional(),
    subscribe: core.serialization.boolean().optional(),
    unsubscribe: core.serialization.boolean().optional(),
    upemail: core.serialization.boolean().optional(),
    smsSubscribe: core.serialization.property("sms_subscribe", core.serialization.boolean().optional()),
    smsUnsubscribe: core.serialization.property("sms_unsubscribe", core.serialization.boolean().optional()),
    upsms: core.serialization.boolean().optional(),
    smsCampaign: core.serialization.property("sms_campaign", core.serialization.boolean().optional()),
});

export declare namespace AddWebhookEvents {
    export interface Raw {
        campaign?: boolean | null;
        cleaned?: boolean | null;
        profile?: boolean | null;
        subscribe?: boolean | null;
        unsubscribe?: boolean | null;
        upemail?: boolean | null;
        sms_subscribe?: boolean | null;
        sms_unsubscribe?: boolean | null;
        upsms?: boolean | null;
        sms_campaign?: boolean | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactSmsChannelEffectiveSubscriptionStatus } from "./AudiencesContactSmsChannelEffectiveSubscriptionStatus.js";
import { AudiencesContactSmsChannelMarketingConsent } from "./AudiencesContactSmsChannelMarketingConsent.js";
import { AudiencesContactSmsChannelSource } from "./AudiencesContactSmsChannelSource.js";

export const AudiencesContactSmsChannel: core.serialization.ObjectSchema<
    serializers.AudiencesContactSmsChannel.Raw,
    Mailchimp.AudiencesContactSmsChannel
> = core.serialization.object({
    effectiveSubscriptionStatus: core.serialization.property(
        "effective_subscription_status",
        AudiencesContactSmsChannelEffectiveSubscriptionStatus.optional(),
    ),
    marketingConsent: core.serialization.property(
        "marketing_consent",
        AudiencesContactSmsChannelMarketingConsent.optional(),
    ),
    smsPhone: core.serialization.property("sms_phone", core.serialization.string().optional()),
    source: AudiencesContactSmsChannelSource.optional(),
    hashedSmsPhone: core.serialization.property("hashed_sms_phone", core.serialization.string().optional()),
});

export declare namespace AudiencesContactSmsChannel {
    export interface Raw {
        effective_subscription_status?: AudiencesContactSmsChannelEffectiveSubscriptionStatus.Raw | null;
        marketing_consent?: AudiencesContactSmsChannelMarketingConsent.Raw | null;
        sms_phone?: string | null;
        source?: AudiencesContactSmsChannelSource.Raw | null;
        hashed_sms_phone?: string | null;
    }
}

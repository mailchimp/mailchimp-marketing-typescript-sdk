//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactSmsChannelMarketingConsentSource } from "./AudiencesContactSmsChannelMarketingConsentSource.js";
import { AudiencesContactSmsChannelMarketingConsentStatus } from "./AudiencesContactSmsChannelMarketingConsentStatus.js";

export const AudiencesContactSmsChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.AudiencesContactSmsChannelMarketingConsent.Raw,
    Mailchimp.AudiencesContactSmsChannelMarketingConsent
> = core.serialization.object({
    source: AudiencesContactSmsChannelMarketingConsentSource.optional(),
    status: AudiencesContactSmsChannelMarketingConsentStatus.optional(),
    capturedAt: core.serialization.property("captured_at", core.serialization.date().optional()),
});

export declare namespace AudiencesContactSmsChannelMarketingConsent {
    export interface Raw {
        source?: AudiencesContactSmsChannelMarketingConsentSource.Raw | null;
        status?: AudiencesContactSmsChannelMarketingConsentStatus.Raw | null;
        captured_at?: string | null;
    }
}

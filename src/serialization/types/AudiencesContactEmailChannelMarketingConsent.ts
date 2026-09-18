//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactEmailChannelMarketingConsentSource } from "./AudiencesContactEmailChannelMarketingConsentSource.js";
import { AudiencesContactEmailChannelMarketingConsentStatus } from "./AudiencesContactEmailChannelMarketingConsentStatus.js";

export const AudiencesContactEmailChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.AudiencesContactEmailChannelMarketingConsent.Raw,
    Mailchimp.AudiencesContactEmailChannelMarketingConsent
> = core.serialization.object({
    source: AudiencesContactEmailChannelMarketingConsentSource.optional(),
    status: AudiencesContactEmailChannelMarketingConsentStatus.optional(),
    capturedAt: core.serialization.property("captured_at", core.serialization.date().optional()),
});

export declare namespace AudiencesContactEmailChannelMarketingConsent {
    export interface Raw {
        source?: AudiencesContactEmailChannelMarketingConsentSource.Raw | null;
        status?: AudiencesContactEmailChannelMarketingConsentStatus.Raw | null;
        captured_at?: string | null;
    }
}

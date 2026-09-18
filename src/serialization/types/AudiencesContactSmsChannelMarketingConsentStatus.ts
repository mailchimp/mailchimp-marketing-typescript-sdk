//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactSmsChannelMarketingConsentStatus: core.serialization.Schema<
    serializers.AudiencesContactSmsChannelMarketingConsentStatus.Raw,
    Mailchimp.AudiencesContactSmsChannelMarketingConsentStatus
> = core.serialization.enum_(["consented", "confirmed", "denied", "unknown"]);

export declare namespace AudiencesContactSmsChannelMarketingConsentStatus {
    export type Raw = "consented" | "confirmed" | "denied" | "unknown";
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestSmsChannelMarketingConsentSource } from "./PatchAudienceContactRequestSmsChannelMarketingConsentSource.js";
import { PatchAudienceContactRequestSmsChannelMarketingConsentStatus } from "./PatchAudienceContactRequestSmsChannelMarketingConsentStatus.js";

export const PatchAudienceContactRequestSmsChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.PatchAudienceContactRequestSmsChannelMarketingConsent.Raw,
    Mailchimp.PatchAudienceContactRequestSmsChannelMarketingConsent
> = core.serialization.object({
    source: PatchAudienceContactRequestSmsChannelMarketingConsentSource.optional(),
    status: PatchAudienceContactRequestSmsChannelMarketingConsentStatus.optional(),
    capturedAt: core.serialization.property("captured_at", core.serialization.date().optional()),
});

export declare namespace PatchAudienceContactRequestSmsChannelMarketingConsent {
    export interface Raw {
        source?: PatchAudienceContactRequestSmsChannelMarketingConsentSource.Raw | null;
        status?: PatchAudienceContactRequestSmsChannelMarketingConsentStatus.Raw | null;
        captured_at?: string | null;
    }
}

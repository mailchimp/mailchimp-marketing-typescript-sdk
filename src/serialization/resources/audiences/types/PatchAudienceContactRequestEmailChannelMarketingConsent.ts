//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestEmailChannelMarketingConsentSource } from "./PatchAudienceContactRequestEmailChannelMarketingConsentSource.js";
import { PatchAudienceContactRequestEmailChannelMarketingConsentStatus } from "./PatchAudienceContactRequestEmailChannelMarketingConsentStatus.js";

export const PatchAudienceContactRequestEmailChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.PatchAudienceContactRequestEmailChannelMarketingConsent.Raw,
    Mailchimp.PatchAudienceContactRequestEmailChannelMarketingConsent
> = core.serialization.object({
    source: PatchAudienceContactRequestEmailChannelMarketingConsentSource.optional(),
    status: PatchAudienceContactRequestEmailChannelMarketingConsentStatus.optional(),
    capturedAt: core.serialization.property("captured_at", core.serialization.date().optional()),
});

export declare namespace PatchAudienceContactRequestEmailChannelMarketingConsent {
    export interface Raw {
        source?: PatchAudienceContactRequestEmailChannelMarketingConsentSource.Raw | null;
        status?: PatchAudienceContactRequestEmailChannelMarketingConsentStatus.Raw | null;
        captured_at?: string | null;
    }
}

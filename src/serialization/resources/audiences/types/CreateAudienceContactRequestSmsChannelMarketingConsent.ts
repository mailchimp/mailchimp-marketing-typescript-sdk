//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestSmsChannelMarketingConsentSource } from "./CreateAudienceContactRequestSmsChannelMarketingConsentSource.js";
import { CreateAudienceContactRequestSmsChannelMarketingConsentStatus } from "./CreateAudienceContactRequestSmsChannelMarketingConsentStatus.js";

export const CreateAudienceContactRequestSmsChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.CreateAudienceContactRequestSmsChannelMarketingConsent.Raw,
    Mailchimp.CreateAudienceContactRequestSmsChannelMarketingConsent
> = core.serialization.object({
    source: CreateAudienceContactRequestSmsChannelMarketingConsentSource.optional(),
    status: CreateAudienceContactRequestSmsChannelMarketingConsentStatus.optional(),
    capturedAt: core.serialization.property("captured_at", core.serialization.date().optional()),
});

export declare namespace CreateAudienceContactRequestSmsChannelMarketingConsent {
    export interface Raw {
        source?: CreateAudienceContactRequestSmsChannelMarketingConsentSource.Raw | null;
        status?: CreateAudienceContactRequestSmsChannelMarketingConsentStatus.Raw | null;
        captured_at?: string | null;
    }
}

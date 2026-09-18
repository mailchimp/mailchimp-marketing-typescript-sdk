//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAudienceContactRequestSmsChannelMarketingConsentStatus: core.serialization.Schema<
    serializers.CreateAudienceContactRequestSmsChannelMarketingConsentStatus.Raw,
    Mailchimp.CreateAudienceContactRequestSmsChannelMarketingConsentStatus
> = core.serialization.enum_(["consented", "confirmed", "unknown"]);

export declare namespace CreateAudienceContactRequestSmsChannelMarketingConsentStatus {
    export type Raw = "consented" | "confirmed" | "unknown";
}

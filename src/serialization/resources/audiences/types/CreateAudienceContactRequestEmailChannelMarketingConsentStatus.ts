//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAudienceContactRequestEmailChannelMarketingConsentStatus: core.serialization.Schema<
    serializers.CreateAudienceContactRequestEmailChannelMarketingConsentStatus.Raw,
    Mailchimp.CreateAudienceContactRequestEmailChannelMarketingConsentStatus
> = core.serialization.enum_(["confirmed", "consented", "denied", "unknown"]);

export declare namespace CreateAudienceContactRequestEmailChannelMarketingConsentStatus {
    export type Raw = "confirmed" | "consented" | "denied" | "unknown";
}

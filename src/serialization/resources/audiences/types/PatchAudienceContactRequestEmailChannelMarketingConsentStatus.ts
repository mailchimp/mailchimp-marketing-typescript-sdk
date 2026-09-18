//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const PatchAudienceContactRequestEmailChannelMarketingConsentStatus: core.serialization.Schema<
    serializers.PatchAudienceContactRequestEmailChannelMarketingConsentStatus.Raw,
    Mailchimp.PatchAudienceContactRequestEmailChannelMarketingConsentStatus
> = core.serialization.enum_(["consented", "denied", "confirmed", "unknown"]);

export declare namespace PatchAudienceContactRequestEmailChannelMarketingConsentStatus {
    export type Raw = "consented" | "denied" | "confirmed" | "unknown";
}

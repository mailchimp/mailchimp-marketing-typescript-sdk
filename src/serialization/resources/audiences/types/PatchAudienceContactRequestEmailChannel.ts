//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestEmailChannelMarketingConsent } from "./PatchAudienceContactRequestEmailChannelMarketingConsent.js";

export const PatchAudienceContactRequestEmailChannel: core.serialization.ObjectSchema<
    serializers.PatchAudienceContactRequestEmailChannel.Raw,
    Mailchimp.PatchAudienceContactRequestEmailChannel
> = core.serialization.object({
    email: core.serialization.string().optional(),
    marketingConsent: core.serialization.property(
        "marketing_consent",
        PatchAudienceContactRequestEmailChannelMarketingConsent.optional(),
    ),
});

export declare namespace PatchAudienceContactRequestEmailChannel {
    export interface Raw {
        email?: string | null;
        marketing_consent?: PatchAudienceContactRequestEmailChannelMarketingConsent.Raw | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestEmailChannelMarketingConsent } from "./CreateAudienceContactRequestEmailChannelMarketingConsent.js";

export const CreateAudienceContactRequestEmailChannel: core.serialization.ObjectSchema<
    serializers.CreateAudienceContactRequestEmailChannel.Raw,
    Mailchimp.CreateAudienceContactRequestEmailChannel
> = core.serialization.object({
    email: core.serialization.string().optional(),
    marketingConsent: core.serialization.property(
        "marketing_consent",
        CreateAudienceContactRequestEmailChannelMarketingConsent.optional(),
    ),
});

export declare namespace CreateAudienceContactRequestEmailChannel {
    export interface Raw {
        email?: string | null;
        marketing_consent?: CreateAudienceContactRequestEmailChannelMarketingConsent.Raw | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestEmailChannelMarketingConsentStatus } from "./CreateAudienceContactRequestEmailChannelMarketingConsentStatus.js";

export const CreateAudienceContactRequestEmailChannelMarketingConsent: core.serialization.ObjectSchema<
    serializers.CreateAudienceContactRequestEmailChannelMarketingConsent.Raw,
    Mailchimp.CreateAudienceContactRequestEmailChannelMarketingConsent
> = core.serialization.object({
    status: CreateAudienceContactRequestEmailChannelMarketingConsentStatus.optional(),
});

export declare namespace CreateAudienceContactRequestEmailChannelMarketingConsent {
    export interface Raw {
        status?: CreateAudienceContactRequestEmailChannelMarketingConsentStatus.Raw | null;
    }
}

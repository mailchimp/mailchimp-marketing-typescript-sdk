//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestSmsChannelMarketingConsent } from "./CreateAudienceContactRequestSmsChannelMarketingConsent.js";

export const CreateAudienceContactRequestSmsChannel: core.serialization.ObjectSchema<
    serializers.CreateAudienceContactRequestSmsChannel.Raw,
    Mailchimp.CreateAudienceContactRequestSmsChannel
> = core.serialization.object({
    marketingConsent: core.serialization.property(
        "marketing_consent",
        CreateAudienceContactRequestSmsChannelMarketingConsent.optional(),
    ),
    smsPhone: core.serialization.property("sms_phone", core.serialization.string().optional()),
});

export declare namespace CreateAudienceContactRequestSmsChannel {
    export interface Raw {
        marketing_consent?: CreateAudienceContactRequestSmsChannelMarketingConsent.Raw | null;
        sms_phone?: string | null;
    }
}

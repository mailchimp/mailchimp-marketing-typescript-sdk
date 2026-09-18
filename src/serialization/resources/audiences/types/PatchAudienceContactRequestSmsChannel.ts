//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestSmsChannelMarketingConsent } from "./PatchAudienceContactRequestSmsChannelMarketingConsent.js";

export const PatchAudienceContactRequestSmsChannel: core.serialization.ObjectSchema<
    serializers.PatchAudienceContactRequestSmsChannel.Raw,
    Mailchimp.PatchAudienceContactRequestSmsChannel
> = core.serialization.object({
    marketingConsent: core.serialization.property(
        "marketing_consent",
        PatchAudienceContactRequestSmsChannelMarketingConsent.optional(),
    ),
    smsPhone: core.serialization.property("sms_phone", core.serialization.string().optional()),
});

export declare namespace PatchAudienceContactRequestSmsChannel {
    export interface Raw {
        marketing_consent?: PatchAudienceContactRequestSmsChannelMarketingConsent.Raw | null;
        sms_phone?: string | null;
    }
}

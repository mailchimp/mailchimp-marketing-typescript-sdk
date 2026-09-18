//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactSmsChannelEffectiveSubscriptionStatusValue } from "./AudiencesContactSmsChannelEffectiveSubscriptionStatusValue.js";

export const AudiencesContactSmsChannelEffectiveSubscriptionStatus: core.serialization.ObjectSchema<
    serializers.AudiencesContactSmsChannelEffectiveSubscriptionStatus.Raw,
    Mailchimp.AudiencesContactSmsChannelEffectiveSubscriptionStatus
> = core.serialization.object({
    value: AudiencesContactSmsChannelEffectiveSubscriptionStatusValue.optional(),
});

export declare namespace AudiencesContactSmsChannelEffectiveSubscriptionStatus {
    export interface Raw {
        value?: AudiencesContactSmsChannelEffectiveSubscriptionStatusValue.Raw | null;
    }
}

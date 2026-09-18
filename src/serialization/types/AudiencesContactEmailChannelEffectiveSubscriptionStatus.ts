//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactEmailChannelEffectiveSubscriptionStatusValue } from "./AudiencesContactEmailChannelEffectiveSubscriptionStatusValue.js";

export const AudiencesContactEmailChannelEffectiveSubscriptionStatus: core.serialization.ObjectSchema<
    serializers.AudiencesContactEmailChannelEffectiveSubscriptionStatus.Raw,
    Mailchimp.AudiencesContactEmailChannelEffectiveSubscriptionStatus
> = core.serialization.object({
    value: AudiencesContactEmailChannelEffectiveSubscriptionStatusValue.optional(),
});

export declare namespace AudiencesContactEmailChannelEffectiveSubscriptionStatus {
    export interface Raw {
        value?: AudiencesContactEmailChannelEffectiveSubscriptionStatusValue.Raw | null;
    }
}

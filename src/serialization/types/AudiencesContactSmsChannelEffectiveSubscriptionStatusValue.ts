//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactSmsChannelEffectiveSubscriptionStatusValue: core.serialization.Schema<
    serializers.AudiencesContactSmsChannelEffectiveSubscriptionStatusValue.Raw,
    Mailchimp.AudiencesContactSmsChannelEffectiveSubscriptionStatusValue
> = core.serialization.enum_(["subscribed", "unsubscribed", "nonsubscribed", "pending"]);

export declare namespace AudiencesContactSmsChannelEffectiveSubscriptionStatusValue {
    export type Raw = "subscribed" | "unsubscribed" | "nonsubscribed" | "pending";
}

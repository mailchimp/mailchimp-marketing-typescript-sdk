//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactEmailChannelEffectiveSubscriptionStatus } from "./AudiencesContactEmailChannelEffectiveSubscriptionStatus.js";
import { AudiencesContactEmailChannelMarketingConsent } from "./AudiencesContactEmailChannelMarketingConsent.js";
import { AudiencesContactEmailChannelSource } from "./AudiencesContactEmailChannelSource.js";

export const AudiencesContactEmailChannel: core.serialization.ObjectSchema<
    serializers.AudiencesContactEmailChannel.Raw,
    Mailchimp.AudiencesContactEmailChannel
> = core.serialization.object({
    effectiveSubscriptionStatus: core.serialization.property(
        "effective_subscription_status",
        AudiencesContactEmailChannelEffectiveSubscriptionStatus.optional(),
    ),
    email: core.serialization.string().optional(),
    hashedEmail: core.serialization.property("hashed_email", core.serialization.string().optional()),
    marketingConsent: core.serialization.property(
        "marketing_consent",
        AudiencesContactEmailChannelMarketingConsent.optional(),
    ),
    source: AudiencesContactEmailChannelSource.optional(),
});

export declare namespace AudiencesContactEmailChannel {
    export interface Raw {
        effective_subscription_status?: AudiencesContactEmailChannelEffectiveSubscriptionStatus.Raw | null;
        email?: string | null;
        hashed_email?: string | null;
        marketing_consent?: AudiencesContactEmailChannelMarketingConsent.Raw | null;
        source?: AudiencesContactEmailChannelSource.Raw | null;
    }
}

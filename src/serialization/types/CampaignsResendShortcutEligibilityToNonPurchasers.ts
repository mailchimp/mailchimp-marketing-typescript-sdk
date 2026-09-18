//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsResendShortcutEligibilityToNonPurchasers: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutEligibilityToNonPurchasers.Raw,
    Mailchimp.CampaignsResendShortcutEligibilityToNonPurchasers
> = core.serialization.object({
    isEligible: core.serialization.property("is_eligible", core.serialization.boolean().optional()),
    reason: core.serialization.string().optional(),
});

export declare namespace CampaignsResendShortcutEligibilityToNonPurchasers {
    export interface Raw {
        is_eligible?: boolean | null;
        reason?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsResendShortcutEligibilityToNonClickers: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutEligibilityToNonClickers.Raw,
    Mailchimp.CampaignsResendShortcutEligibilityToNonClickers
> = core.serialization.object({
    isEligible: core.serialization.property("is_eligible", core.serialization.boolean().optional()),
    reason: core.serialization.string().optional(),
});

export declare namespace CampaignsResendShortcutEligibilityToNonClickers {
    export interface Raw {
        is_eligible?: boolean | null;
        reason?: string | null;
    }
}

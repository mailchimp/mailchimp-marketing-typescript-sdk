//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsResendShortcutEligibilityToNewSubscribers } from "./CampaignsResendShortcutEligibilityToNewSubscribers.js";
import { CampaignsResendShortcutEligibilityToNonClickers } from "./CampaignsResendShortcutEligibilityToNonClickers.js";
import { CampaignsResendShortcutEligibilityToNonOpeners } from "./CampaignsResendShortcutEligibilityToNonOpeners.js";
import { CampaignsResendShortcutEligibilityToNonPurchasers } from "./CampaignsResendShortcutEligibilityToNonPurchasers.js";

export const CampaignsResendShortcutEligibility: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutEligibility.Raw,
    Mailchimp.CampaignsResendShortcutEligibility
> = core.serialization.object({
    toNewSubscribers: core.serialization.property(
        "to_new_subscribers",
        CampaignsResendShortcutEligibilityToNewSubscribers.optional(),
    ),
    toNonClickers: core.serialization.property(
        "to_non_clickers",
        CampaignsResendShortcutEligibilityToNonClickers.optional(),
    ),
    toNonOpeners: core.serialization.property(
        "to_non_openers",
        CampaignsResendShortcutEligibilityToNonOpeners.optional(),
    ),
    toNonPurchasers: core.serialization.property(
        "to_non_purchasers",
        CampaignsResendShortcutEligibilityToNonPurchasers.optional(),
    ),
});

export declare namespace CampaignsResendShortcutEligibility {
    export interface Raw {
        to_new_subscribers?: CampaignsResendShortcutEligibilityToNewSubscribers.Raw | null;
        to_non_clickers?: CampaignsResendShortcutEligibilityToNonClickers.Raw | null;
        to_non_openers?: CampaignsResendShortcutEligibilityToNonOpeners.Raw | null;
        to_non_purchasers?: CampaignsResendShortcutEligibilityToNonPurchasers.Raw | null;
    }
}

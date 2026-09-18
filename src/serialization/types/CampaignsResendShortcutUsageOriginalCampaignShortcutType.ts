//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsResendShortcutUsageOriginalCampaignShortcutType: core.serialization.Schema<
    serializers.CampaignsResendShortcutUsageOriginalCampaignShortcutType.Raw,
    Mailchimp.CampaignsResendShortcutUsageOriginalCampaignShortcutType
> = core.serialization.enum_(["non_openers", "new_subscribers", "non_clickers", "non_purchasers"]);

export declare namespace CampaignsResendShortcutUsageOriginalCampaignShortcutType {
    export type Raw = "non_openers" | "new_subscribers" | "non_clickers" | "non_purchasers";
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsResendShortcutUsageOriginalCampaign } from "./CampaignsResendShortcutUsageOriginalCampaign.js";
import { CampaignsResendShortcutUsageShortcutCampaignsItem } from "./CampaignsResendShortcutUsageShortcutCampaignsItem.js";

export const CampaignsResendShortcutUsage: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutUsage.Raw,
    Mailchimp.CampaignsResendShortcutUsage
> = core.serialization.object({
    originalCampaign: core.serialization.property(
        "original_campaign",
        CampaignsResendShortcutUsageOriginalCampaign.optional(),
    ),
    shortcutCampaigns: core.serialization.property(
        "shortcut_campaigns",
        core.serialization.list(CampaignsResendShortcutUsageShortcutCampaignsItem).optional(),
    ),
});

export declare namespace CampaignsResendShortcutUsage {
    export interface Raw {
        original_campaign?: CampaignsResendShortcutUsageOriginalCampaign.Raw | null;
        shortcut_campaigns?: CampaignsResendShortcutUsageShortcutCampaignsItem.Raw[] | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsResendShortcutUsageOriginalCampaignShortcutType } from "./CampaignsResendShortcutUsageOriginalCampaignShortcutType.js";

export const CampaignsResendShortcutUsageOriginalCampaign: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutUsageOriginalCampaign.Raw,
    Mailchimp.CampaignsResendShortcutUsageOriginalCampaign
> = core.serialization.object({
    id: core.serialization.string().optional(),
    shortcutType: core.serialization.property(
        "shortcut_type",
        CampaignsResendShortcutUsageOriginalCampaignShortcutType.optional(),
    ),
    title: core.serialization.string().optional(),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
});

export declare namespace CampaignsResendShortcutUsageOriginalCampaign {
    export interface Raw {
        id?: string | null;
        shortcut_type?: CampaignsResendShortcutUsageOriginalCampaignShortcutType.Raw | null;
        title?: string | null;
        web_id?: number | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsResendShortcutUsageShortcutCampaignsItemShortcutType } from "./CampaignsResendShortcutUsageShortcutCampaignsItemShortcutType.js";
import { CampaignsResendShortcutUsageShortcutCampaignsItemStatus } from "./CampaignsResendShortcutUsageShortcutCampaignsItemStatus.js";

export const CampaignsResendShortcutUsageShortcutCampaignsItem: core.serialization.ObjectSchema<
    serializers.CampaignsResendShortcutUsageShortcutCampaignsItem.Raw,
    Mailchimp.CampaignsResendShortcutUsageShortcutCampaignsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
    shortcutType: core.serialization.property(
        "shortcut_type",
        CampaignsResendShortcutUsageShortcutCampaignsItemShortcutType.optional(),
    ),
    status: CampaignsResendShortcutUsageShortcutCampaignsItemStatus.optional(),
    webId: core.serialization.property("web_id", core.serialization.number().optional()),
});

export declare namespace CampaignsResendShortcutUsageShortcutCampaignsItem {
    export interface Raw {
        id?: string | null;
        send_time?: string | null;
        shortcut_type?: CampaignsResendShortcutUsageShortcutCampaignsItemShortcutType.Raw | null;
        status?: CampaignsResendShortcutUsageShortcutCampaignsItemStatus.Raw | null;
        web_id?: number | null;
    }
}

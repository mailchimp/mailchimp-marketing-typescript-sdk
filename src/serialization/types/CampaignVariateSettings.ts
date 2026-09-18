//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignVariateSettingsCombinationsItem } from "./CampaignVariateSettingsCombinationsItem.js";
import { CampaignVariateSettingsWinnerCriteria } from "./CampaignVariateSettingsWinnerCriteria.js";

export const CampaignVariateSettings: core.serialization.ObjectSchema<
    serializers.CampaignVariateSettings.Raw,
    Mailchimp.CampaignVariateSettings
> = core.serialization.object({
    combinations: core.serialization.list(CampaignVariateSettingsCombinationsItem).optional(),
    contents: core.serialization.list(core.serialization.string()).optional(),
    fromNames: core.serialization.property(
        "from_names",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    replyToAddresses: core.serialization.property(
        "reply_to_addresses",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    sendTimes: core.serialization.property("send_times", core.serialization.list(core.serialization.date()).optional()),
    subjectLines: core.serialization.property(
        "subject_lines",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    testSize: core.serialization.property("test_size", core.serialization.number().optional()),
    waitTime: core.serialization.property("wait_time", core.serialization.number().optional()),
    winnerCriteria: core.serialization.property("winner_criteria", CampaignVariateSettingsWinnerCriteria),
    winningCampaignId: core.serialization.property("winning_campaign_id", core.serialization.string().optional()),
    winningCombinationId: core.serialization.property("winning_combination_id", core.serialization.string().optional()),
});

export declare namespace CampaignVariateSettings {
    export interface Raw {
        combinations?: CampaignVariateSettingsCombinationsItem.Raw[] | null;
        contents?: string[] | null;
        from_names?: string[] | null;
        reply_to_addresses?: string[] | null;
        send_times?: string[] | null;
        subject_lines?: string[] | null;
        test_size?: number | null;
        wait_time?: number | null;
        winner_criteria: CampaignVariateSettingsWinnerCriteria.Raw;
        winning_campaign_id?: string | null;
        winning_combination_id?: string | null;
    }
}

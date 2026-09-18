//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateCampaignsRequestVariateSettingsSendTimesItem } from "./CreateCampaignsRequestVariateSettingsSendTimesItem.js";
import { CreateCampaignsRequestVariateSettingsWinnerCriteria } from "./CreateCampaignsRequestVariateSettingsWinnerCriteria.js";

export const CreateCampaignsRequestVariateSettings: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestVariateSettings.Raw,
    Mailchimp.CreateCampaignsRequestVariateSettings
> = core.serialization.object({
    fromNames: core.serialization.property(
        "from_names",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    replyToAddresses: core.serialization.property(
        "reply_to_addresses",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    sendTimes: core.serialization.property(
        "send_times",
        core.serialization.list(CreateCampaignsRequestVariateSettingsSendTimesItem).optional(),
    ),
    subjectLines: core.serialization.property(
        "subject_lines",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    testSize: core.serialization.property("test_size", core.serialization.number().optional()),
    waitTime: core.serialization.property("wait_time", core.serialization.number().optional()),
    winnerCriteria: core.serialization.property("winner_criteria", CreateCampaignsRequestVariateSettingsWinnerCriteria),
});

export declare namespace CreateCampaignsRequestVariateSettings {
    export interface Raw {
        from_names?: string[] | null;
        reply_to_addresses?: string[] | null;
        send_times?: CreateCampaignsRequestVariateSettingsSendTimesItem.Raw[] | null;
        subject_lines?: string[] | null;
        test_size?: number | null;
        wait_time?: number | null;
        winner_criteria: CreateCampaignsRequestVariateSettingsWinnerCriteria.Raw;
    }
}

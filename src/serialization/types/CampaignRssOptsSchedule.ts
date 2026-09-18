//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignRssOptsScheduleDailySend } from "./CampaignRssOptsScheduleDailySend.js";
import { CampaignRssOptsScheduleWeeklySendDay } from "./CampaignRssOptsScheduleWeeklySendDay.js";

export const CampaignRssOptsSchedule: core.serialization.ObjectSchema<
    serializers.CampaignRssOptsSchedule.Raw,
    Mailchimp.CampaignRssOptsSchedule
> = core.serialization.object({
    dailySend: core.serialization.property("daily_send", CampaignRssOptsScheduleDailySend.optional()),
    hour: core.serialization.number().optional(),
    monthlySendDate: core.serialization.property("monthly_send_date", core.serialization.number().optional()),
    weeklySendDay: core.serialization.property("weekly_send_day", CampaignRssOptsScheduleWeeklySendDay.optional()),
});

export declare namespace CampaignRssOptsSchedule {
    export interface Raw {
        daily_send?: CampaignRssOptsScheduleDailySend.Raw | null;
        hour?: number | null;
        monthly_send_date?: number | null;
        weekly_send_day?: CampaignRssOptsScheduleWeeklySendDay.Raw | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignsRssOptsScheduleDailySend } from "./CampaignsRssOptsScheduleDailySend.js";
import { CampaignsRssOptsScheduleWeeklySendDay } from "./CampaignsRssOptsScheduleWeeklySendDay.js";

export const CampaignsRssOptsSchedule: core.serialization.ObjectSchema<
    serializers.CampaignsRssOptsSchedule.Raw,
    Mailchimp.CampaignsRssOptsSchedule
> = core.serialization.object({
    dailySend: core.serialization.property("daily_send", CampaignsRssOptsScheduleDailySend.optional()),
    hour: core.serialization.number().optional(),
    monthlySendDate: core.serialization.property("monthly_send_date", core.serialization.number().optional()),
    weeklySendDay: core.serialization.property("weekly_send_day", CampaignsRssOptsScheduleWeeklySendDay.optional()),
});

export declare namespace CampaignsRssOptsSchedule {
    export interface Raw {
        daily_send?: CampaignsRssOptsScheduleDailySend.Raw | null;
        hour?: number | null;
        monthly_send_date?: number | null;
        weekly_send_day?: CampaignsRssOptsScheduleWeeklySendDay.Raw | null;
    }
}

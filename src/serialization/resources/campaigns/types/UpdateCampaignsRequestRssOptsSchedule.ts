//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateCampaignsRequestRssOptsScheduleDailySend } from "./UpdateCampaignsRequestRssOptsScheduleDailySend.js";
import { UpdateCampaignsRequestRssOptsScheduleWeeklySendDay } from "./UpdateCampaignsRequestRssOptsScheduleWeeklySendDay.js";

export const UpdateCampaignsRequestRssOptsSchedule: core.serialization.ObjectSchema<
    serializers.UpdateCampaignsRequestRssOptsSchedule.Raw,
    Mailchimp.UpdateCampaignsRequestRssOptsSchedule
> = core.serialization.object({
    dailySend: core.serialization.property("daily_send", UpdateCampaignsRequestRssOptsScheduleDailySend.optional()),
    hour: core.serialization.number().optional(),
    monthlySendDate: core.serialization.property("monthly_send_date", core.serialization.number().optional()),
    weeklySendDay: core.serialization.property(
        "weekly_send_day",
        UpdateCampaignsRequestRssOptsScheduleWeeklySendDay.optional(),
    ),
});

export declare namespace UpdateCampaignsRequestRssOptsSchedule {
    export interface Raw {
        daily_send?: UpdateCampaignsRequestRssOptsScheduleDailySend.Raw | null;
        hour?: number | null;
        monthly_send_date?: number | null;
        weekly_send_day?: UpdateCampaignsRequestRssOptsScheduleWeeklySendDay.Raw | null;
    }
}

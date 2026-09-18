//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateCampaignsRequestRssOptsScheduleDailySend } from "./CreateCampaignsRequestRssOptsScheduleDailySend.js";
import { CreateCampaignsRequestRssOptsScheduleWeeklySendDay } from "./CreateCampaignsRequestRssOptsScheduleWeeklySendDay.js";

export const CreateCampaignsRequestRssOptsSchedule: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestRssOptsSchedule.Raw,
    Mailchimp.CreateCampaignsRequestRssOptsSchedule
> = core.serialization.object({
    dailySend: core.serialization.property("daily_send", CreateCampaignsRequestRssOptsScheduleDailySend.optional()),
    hour: core.serialization.number().optional(),
    monthlySendDate: core.serialization.property("monthly_send_date", core.serialization.number().optional()),
    weeklySendDay: core.serialization.property(
        "weekly_send_day",
        CreateCampaignsRequestRssOptsScheduleWeeklySendDay.optional(),
    ),
});

export declare namespace CreateCampaignsRequestRssOptsSchedule {
    export interface Raw {
        daily_send?: CreateCampaignsRequestRssOptsScheduleDailySend.Raw | null;
        hour?: number | null;
        monthly_send_date?: number | null;
        weekly_send_day?: CreateCampaignsRequestRssOptsScheduleWeeklySendDay.Raw | null;
    }
}

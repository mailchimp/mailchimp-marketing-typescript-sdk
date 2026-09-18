//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsRssOptsScheduleWeeklySendDay: core.serialization.Schema<
    serializers.CampaignsRssOptsScheduleWeeklySendDay.Raw,
    Mailchimp.CampaignsRssOptsScheduleWeeklySendDay
> = core.serialization.enum_(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);

export declare namespace CampaignsRssOptsScheduleWeeklySendDay {
    export type Raw = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
}

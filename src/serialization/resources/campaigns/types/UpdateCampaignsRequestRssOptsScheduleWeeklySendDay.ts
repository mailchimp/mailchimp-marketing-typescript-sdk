//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateCampaignsRequestRssOptsScheduleWeeklySendDay: core.serialization.Schema<
    serializers.UpdateCampaignsRequestRssOptsScheduleWeeklySendDay.Raw,
    Mailchimp.UpdateCampaignsRequestRssOptsScheduleWeeklySendDay
> = core.serialization.enum_(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]);

export declare namespace UpdateCampaignsRequestRssOptsScheduleWeeklySendDay {
    export type Raw = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
}

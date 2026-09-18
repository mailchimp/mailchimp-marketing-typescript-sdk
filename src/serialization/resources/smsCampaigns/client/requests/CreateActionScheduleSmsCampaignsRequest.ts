//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateActionScheduleSmsCampaignsRequest: core.serialization.Schema<
    serializers.CreateActionScheduleSmsCampaignsRequest.Raw,
    Omit<Mailchimp.CreateActionScheduleSmsCampaignsRequest, "smsCampaignId">
> = core.serialization.object({
    scheduleTime: core.serialization.property("schedule_time", core.serialization.date()),
});

export declare namespace CreateActionScheduleSmsCampaignsRequest {
    export interface Raw {
        schedule_time: string;
    }
}

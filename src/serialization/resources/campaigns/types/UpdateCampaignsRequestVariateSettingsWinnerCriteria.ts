//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateCampaignsRequestVariateSettingsWinnerCriteria: core.serialization.Schema<
    serializers.UpdateCampaignsRequestVariateSettingsWinnerCriteria.Raw,
    Mailchimp.UpdateCampaignsRequestVariateSettingsWinnerCriteria
> = core.serialization.enum_(["opens", "clicks", "manual", "total_revenue"]);

export declare namespace UpdateCampaignsRequestVariateSettingsWinnerCriteria {
    export type Raw = "opens" | "clicks" | "manual" | "total_revenue";
}

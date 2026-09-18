//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestVariateSettingsWinnerCriteria: core.serialization.Schema<
    serializers.CreateCampaignsRequestVariateSettingsWinnerCriteria.Raw,
    Mailchimp.CreateCampaignsRequestVariateSettingsWinnerCriteria
> = core.serialization.enum_(["opens", "clicks", "manual", "total_revenue"]);

export declare namespace CreateCampaignsRequestVariateSettingsWinnerCriteria {
    export type Raw = "opens" | "clicks" | "manual" | "total_revenue";
}

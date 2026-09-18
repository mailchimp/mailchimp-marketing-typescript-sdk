//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignVariateSettingsWinnerCriteria: core.serialization.Schema<
    serializers.CampaignVariateSettingsWinnerCriteria.Raw,
    Mailchimp.CampaignVariateSettingsWinnerCriteria
> = core.serialization.enum_(["opens", "clicks", "manual", "total_revenue"]);

export declare namespace CampaignVariateSettingsWinnerCriteria {
    export type Raw = "opens" | "clicks" | "manual" | "total_revenue";
}

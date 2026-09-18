//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignTrackingOptionsCapsule } from "./CampaignTrackingOptionsCapsule.js";
import { CampaignTrackingOptionsSalesforce } from "./CampaignTrackingOptionsSalesforce.js";

export const CampaignTrackingOptions: core.serialization.ObjectSchema<
    serializers.CampaignTrackingOptions.Raw,
    Mailchimp.CampaignTrackingOptions
> = core.serialization.object({
    capsule: CampaignTrackingOptionsCapsule.optional(),
    clicktale: core.serialization.string().optional(),
    ecomm360: core.serialization.boolean().optional(),
    goalTracking: core.serialization.property("goal_tracking", core.serialization.boolean().optional()),
    googleAnalytics: core.serialization.property("google_analytics", core.serialization.string().optional()),
    htmlClicks: core.serialization.property("html_clicks", core.serialization.boolean().optional()),
    opens: core.serialization.boolean().optional(),
    salesforce: CampaignTrackingOptionsSalesforce.optional(),
    textClicks: core.serialization.property("text_clicks", core.serialization.boolean().optional()),
});

export declare namespace CampaignTrackingOptions {
    export interface Raw {
        capsule?: CampaignTrackingOptionsCapsule.Raw | null;
        clicktale?: string | null;
        ecomm360?: boolean | null;
        goal_tracking?: boolean | null;
        google_analytics?: string | null;
        html_clicks?: boolean | null;
        opens?: boolean | null;
        salesforce?: CampaignTrackingOptionsSalesforce.Raw | null;
        text_clicks?: boolean | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignTrackingOptionsSalesforce: core.serialization.ObjectSchema<
    serializers.CampaignTrackingOptionsSalesforce.Raw,
    Mailchimp.CampaignTrackingOptionsSalesforce
> = core.serialization.object({
    campaign: core.serialization.boolean().optional(),
    notes: core.serialization.boolean().optional(),
});

export declare namespace CampaignTrackingOptionsSalesforce {
    export interface Raw {
        campaign?: boolean | null;
        notes?: boolean | null;
    }
}

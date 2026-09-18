//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignTrackingOptionsCapsule: core.serialization.ObjectSchema<
    serializers.CampaignTrackingOptionsCapsule.Raw,
    Mailchimp.CampaignTrackingOptionsCapsule
> = core.serialization.object({
    notes: core.serialization.boolean().optional(),
});

export declare namespace CampaignTrackingOptionsCapsule {
    export interface Raw {
        notes?: boolean | null;
    }
}

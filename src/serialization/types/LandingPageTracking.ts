//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageTracking: core.serialization.ObjectSchema<
    serializers.LandingPageTracking.Raw,
    Mailchimp.LandingPageTracking
> = core.serialization.object({
    enableRestrictedDataProcessing: core.serialization.property(
        "enable_restricted_data_processing",
        core.serialization.boolean().optional(),
    ),
    trackWithMailchimp: core.serialization.property("track_with_mailchimp", core.serialization.boolean().optional()),
});

export declare namespace LandingPageTracking {
    export interface Raw {
        enable_restricted_data_processing?: boolean | null;
        track_with_mailchimp?: boolean | null;
    }
}

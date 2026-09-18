//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceTargetingSpecsLocations: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceTargetingSpecsLocations.Raw,
    Mailchimp.ReportingFacebookAdAudienceTargetingSpecsLocations
> = core.serialization.object({
    cities: core.serialization.list(core.serialization.string()).optional(),
    countries: core.serialization.list(core.serialization.string()).optional(),
    regions: core.serialization.list(core.serialization.string()).optional(),
    zips: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ReportingFacebookAdAudienceTargetingSpecsLocations {
    export interface Raw {
        cities?: string[] | null;
        countries?: string[] | null;
        regions?: string[] | null;
        zips?: string[] | null;
    }
}

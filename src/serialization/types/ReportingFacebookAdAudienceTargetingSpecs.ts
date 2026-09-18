//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ReportingFacebookAdAudienceTargetingSpecsInterestsItem } from "./ReportingFacebookAdAudienceTargetingSpecsInterestsItem.js";
import { ReportingFacebookAdAudienceTargetingSpecsLocations } from "./ReportingFacebookAdAudienceTargetingSpecsLocations.js";

export const ReportingFacebookAdAudienceTargetingSpecs: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceTargetingSpecs.Raw,
    Mailchimp.ReportingFacebookAdAudienceTargetingSpecs
> = core.serialization.object({
    gender: core.serialization.number().optional(),
    interests: core.serialization.list(ReportingFacebookAdAudienceTargetingSpecsInterestsItem).optional(),
    locations: ReportingFacebookAdAudienceTargetingSpecsLocations.optional(),
    maxAge: core.serialization.property("max_age", core.serialization.number().optional()),
    minAge: core.serialization.property("min_age", core.serialization.number().optional()),
});

export declare namespace ReportingFacebookAdAudienceTargetingSpecs {
    export interface Raw {
        gender?: number | null;
        interests?: ReportingFacebookAdAudienceTargetingSpecsInterestsItem.Raw[] | null;
        locations?: ReportingFacebookAdAudienceTargetingSpecsLocations.Raw | null;
        max_age?: number | null;
        min_age?: number | null;
    }
}

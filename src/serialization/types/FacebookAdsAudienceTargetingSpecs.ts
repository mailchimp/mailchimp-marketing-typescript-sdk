//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdsAudienceTargetingSpecsInterestsItem } from "./FacebookAdsAudienceTargetingSpecsInterestsItem.js";
import { FacebookAdsAudienceTargetingSpecsLocations } from "./FacebookAdsAudienceTargetingSpecsLocations.js";

export const FacebookAdsAudienceTargetingSpecs: core.serialization.ObjectSchema<
    serializers.FacebookAdsAudienceTargetingSpecs.Raw,
    Mailchimp.FacebookAdsAudienceTargetingSpecs
> = core.serialization.object({
    gender: core.serialization.number().optional(),
    interests: core.serialization.list(FacebookAdsAudienceTargetingSpecsInterestsItem).optional(),
    locations: FacebookAdsAudienceTargetingSpecsLocations.optional(),
    maxAge: core.serialization.property("max_age", core.serialization.number().optional()),
    minAge: core.serialization.property("min_age", core.serialization.number().optional()),
});

export declare namespace FacebookAdsAudienceTargetingSpecs {
    export interface Raw {
        gender?: number | null;
        interests?: FacebookAdsAudienceTargetingSpecsInterestsItem.Raw[] | null;
        locations?: FacebookAdsAudienceTargetingSpecsLocations.Raw | null;
        max_age?: number | null;
        min_age?: number | null;
    }
}

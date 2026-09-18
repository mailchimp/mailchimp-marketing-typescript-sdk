//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdsAudienceEmailSource } from "./FacebookAdsAudienceEmailSource.js";
import { FacebookAdsAudienceSourceType } from "./FacebookAdsAudienceSourceType.js";
import { FacebookAdsAudienceTargetingSpecs } from "./FacebookAdsAudienceTargetingSpecs.js";
import { FacebookAdsAudienceType } from "./FacebookAdsAudienceType.js";

export const FacebookAdsAudience: core.serialization.ObjectSchema<
    serializers.FacebookAdsAudience.Raw,
    Mailchimp.FacebookAdsAudience
> = core.serialization.object({
    emailSource: core.serialization.property("email_source", FacebookAdsAudienceEmailSource.optional()),
    includeSourceInTarget: core.serialization.property(
        "include_source_in_target",
        core.serialization.boolean().optional(),
    ),
    lookalikeCountryCode: core.serialization.property("lookalike_country_code", core.serialization.string().optional()),
    sourceType: core.serialization.property("source_type", FacebookAdsAudienceSourceType.optional()),
    targetingSpecs: core.serialization.property("targeting_specs", FacebookAdsAudienceTargetingSpecs.optional()),
    type: FacebookAdsAudienceType.optional(),
});

export declare namespace FacebookAdsAudience {
    export interface Raw {
        email_source?: FacebookAdsAudienceEmailSource.Raw | null;
        include_source_in_target?: boolean | null;
        lookalike_country_code?: string | null;
        source_type?: FacebookAdsAudienceSourceType.Raw | null;
        targeting_specs?: FacebookAdsAudienceTargetingSpecs.Raw | null;
        type?: FacebookAdsAudienceType.Raw | null;
    }
}

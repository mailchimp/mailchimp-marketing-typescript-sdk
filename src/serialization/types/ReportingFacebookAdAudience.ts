//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ReportingFacebookAdAudienceEmailSource } from "./ReportingFacebookAdAudienceEmailSource.js";
import { ReportingFacebookAdAudienceSourceType } from "./ReportingFacebookAdAudienceSourceType.js";
import { ReportingFacebookAdAudienceTargetingSpecs } from "./ReportingFacebookAdAudienceTargetingSpecs.js";
import { ReportingFacebookAdAudienceType } from "./ReportingFacebookAdAudienceType.js";

export const ReportingFacebookAdAudience: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudience.Raw,
    Mailchimp.ReportingFacebookAdAudience
> = core.serialization.object({
    emailSource: core.serialization.property("email_source", ReportingFacebookAdAudienceEmailSource.optional()),
    includeSourceInTarget: core.serialization.property(
        "include_source_in_target",
        core.serialization.boolean().optional(),
    ),
    lookalikeCountryCode: core.serialization.property("lookalike_country_code", core.serialization.string().optional()),
    sourceType: core.serialization.property("source_type", ReportingFacebookAdAudienceSourceType.optional()),
    targetingSpecs: core.serialization.property(
        "targeting_specs",
        ReportingFacebookAdAudienceTargetingSpecs.optional(),
    ),
    type: ReportingFacebookAdAudienceType.optional(),
});

export declare namespace ReportingFacebookAdAudience {
    export interface Raw {
        email_source?: ReportingFacebookAdAudienceEmailSource.Raw | null;
        include_source_in_target?: boolean | null;
        lookalike_country_code?: string | null;
        source_type?: ReportingFacebookAdAudienceSourceType.Raw | null;
        targeting_specs?: ReportingFacebookAdAudienceTargetingSpecs.Raw | null;
        type?: ReportingFacebookAdAudienceType.Raw | null;
    }
}

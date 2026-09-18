//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceTargetingSpecsInterestsItem: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdAudienceTargetingSpecsInterestsItem.Raw,
    Mailchimp.ReportingFacebookAdAudienceTargetingSpecsInterestsItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
});

export declare namespace ReportingFacebookAdAudienceTargetingSpecsInterestsItem {
    export interface Raw {
        name?: string | null;
    }
}

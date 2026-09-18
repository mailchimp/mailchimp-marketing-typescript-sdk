//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsAudienceType: core.serialization.Schema<
    serializers.FacebookAdsAudienceType.Raw,
    Mailchimp.FacebookAdsAudienceType
> = core.serialization.enum_(["Custom Audience", "Lookalike Audience", "Interest-based Audience"]);

export declare namespace FacebookAdsAudienceType {
    export type Raw = "Custom Audience" | "Lookalike Audience" | "Interest-based Audience";
}

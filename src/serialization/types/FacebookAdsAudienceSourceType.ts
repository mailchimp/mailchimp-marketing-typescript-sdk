//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsAudienceSourceType: core.serialization.Schema<
    serializers.FacebookAdsAudienceSourceType.Raw,
    Mailchimp.FacebookAdsAudienceSourceType
> = core.serialization.enum_(["facebook", "list"]);

export declare namespace FacebookAdsAudienceSourceType {
    export type Raw = "facebook" | "list";
}

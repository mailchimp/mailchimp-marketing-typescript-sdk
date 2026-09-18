//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceSourceType: core.serialization.Schema<
    serializers.ReportingFacebookAdAudienceSourceType.Raw,
    Mailchimp.ReportingFacebookAdAudienceSourceType
> = core.serialization.enum_(["facebook", "list"]);

export declare namespace ReportingFacebookAdAudienceSourceType {
    export type Raw = "facebook" | "list";
}

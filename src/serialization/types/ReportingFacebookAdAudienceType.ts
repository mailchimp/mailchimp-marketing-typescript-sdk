//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdAudienceType: core.serialization.Schema<
    serializers.ReportingFacebookAdAudienceType.Raw,
    Mailchimp.ReportingFacebookAdAudienceType
> = core.serialization.enum_(["Custom Audience", "Lookalike Audience", "Interest-based Audience"]);

export declare namespace ReportingFacebookAdAudienceType {
    export type Raw = "Custom Audience" | "Lookalike Audience" | "Interest-based Audience";
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdReportSummaryExtendedAt: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdReportSummaryExtendedAt.Raw,
    Mailchimp.ReportingFacebookAdReportSummaryExtendedAt
> = core.serialization.object({
    datetime: core.serialization.string().optional(),
    timezone: core.serialization.string().optional(),
});

export declare namespace ReportingFacebookAdReportSummaryExtendedAt {
    export interface Raw {
        datetime?: string | null;
        timezone?: string | null;
    }
}

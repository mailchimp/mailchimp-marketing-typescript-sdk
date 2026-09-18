//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdReportSummaryEcommerce: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdReportSummaryEcommerce.Raw,
    Mailchimp.ReportingFacebookAdReportSummaryEcommerce
> = core.serialization.object({
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
});

export declare namespace ReportingFacebookAdReportSummaryEcommerce {
    export interface Raw {
        currency_code?: string | null;
        total_revenue?: number | null;
    }
}

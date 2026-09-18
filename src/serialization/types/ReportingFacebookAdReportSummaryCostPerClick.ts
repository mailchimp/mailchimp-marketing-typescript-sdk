//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ReportingFacebookAdReportSummaryCostPerClick: core.serialization.ObjectSchema<
    serializers.ReportingFacebookAdReportSummaryCostPerClick.Raw,
    Mailchimp.ReportingFacebookAdReportSummaryCostPerClick
> = core.serialization.object({
    amount: core.serialization.number().optional(),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
});

export declare namespace ReportingFacebookAdReportSummaryCostPerClick {
    export interface Raw {
        amount?: number | null;
        currency_code?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdReportSummaryEcommerce: core.serialization.ObjectSchema<
    serializers.FacebookAdReportSummaryEcommerce.Raw,
    Mailchimp.FacebookAdReportSummaryEcommerce
> = core.serialization.object({
    averageOrderRevenue: core.serialization.property("average_order_revenue", core.serialization.number().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
});

export declare namespace FacebookAdReportSummaryEcommerce {
    export interface Raw {
        average_order_revenue?: number | null;
        currency_code?: string | null;
        total_revenue?: number | null;
    }
}

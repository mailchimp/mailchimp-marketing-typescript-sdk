//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageReportEcommerce: core.serialization.ObjectSchema<
    serializers.LandingPageReportEcommerce.Raw,
    Mailchimp.LandingPageReportEcommerce
> = core.serialization.object({
    averageOrderRevenue: core.serialization.property("average_order_revenue", core.serialization.number().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    totalOrders: core.serialization.property("total_orders", core.serialization.number().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
});

export declare namespace LandingPageReportEcommerce {
    export interface Raw {
        average_order_revenue?: number | null;
        currency_code?: string | null;
        total_orders?: number | null;
        total_revenue?: number | null;
    }
}

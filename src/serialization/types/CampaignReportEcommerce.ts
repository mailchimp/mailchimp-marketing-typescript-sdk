//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportEcommerce: core.serialization.ObjectSchema<
    serializers.CampaignReportEcommerce.Raw,
    Mailchimp.CampaignReportEcommerce
> = core.serialization.object({
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    totalOrders: core.serialization.property("total_orders", core.serialization.number().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
    totalSpent: core.serialization.property("total_spent", core.serialization.number().optional()),
});

export declare namespace CampaignReportEcommerce {
    export interface Raw {
        currency_code?: string | null;
        total_orders?: number | null;
        total_revenue?: number | null;
        total_spent?: number | null;
    }
}

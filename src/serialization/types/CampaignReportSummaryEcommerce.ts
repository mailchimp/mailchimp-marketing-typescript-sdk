//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportSummaryEcommerce: core.serialization.ObjectSchema<
    serializers.CampaignReportSummaryEcommerce.Raw,
    Mailchimp.CampaignReportSummaryEcommerce
> = core.serialization.object({
    totalOrders: core.serialization.property("total_orders", core.serialization.number().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
    totalSpent: core.serialization.property("total_spent", core.serialization.number().optional()),
});

export declare namespace CampaignReportSummaryEcommerce {
    export interface Raw {
        total_orders?: number | null;
        total_revenue?: number | null;
        total_spent?: number | null;
    }
}

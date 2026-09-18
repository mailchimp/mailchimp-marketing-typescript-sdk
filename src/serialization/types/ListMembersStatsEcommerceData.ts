//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersStatsEcommerceData: core.serialization.ObjectSchema<
    serializers.ListMembersStatsEcommerceData.Raw,
    Mailchimp.ListMembersStatsEcommerceData
> = core.serialization.object({
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    numberOfOrders: core.serialization.property("number_of_orders", core.serialization.number().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
});

export declare namespace ListMembersStatsEcommerceData {
    export interface Raw {
        currency_code?: string | null;
        number_of_orders?: number | null;
        total_revenue?: number | null;
    }
}

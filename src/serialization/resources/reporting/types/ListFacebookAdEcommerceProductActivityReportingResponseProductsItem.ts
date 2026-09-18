//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFacebookAdEcommerceProductActivityReportingResponseProductsItem: core.serialization.ObjectSchema<
    serializers.ListFacebookAdEcommerceProductActivityReportingResponseProductsItem.Raw,
    Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponseProductsItem
> = core.serialization.object({
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    recommendationPurchased: core.serialization.property(
        "recommendation_purchased",
        core.serialization.number().optional(),
    ),
    recommendationTotal: core.serialization.property("recommendation_total", core.serialization.number().optional()),
    sku: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    totalPurchased: core.serialization.property("total_purchased", core.serialization.number().optional()),
    totalRevenue: core.serialization.property("total_revenue", core.serialization.number().optional()),
});

export declare namespace ListFacebookAdEcommerceProductActivityReportingResponseProductsItem {
    export interface Raw {
        currency_code?: string | null;
        image_url?: string | null;
        recommendation_purchased?: number | null;
        recommendation_total?: number | null;
        sku?: string | null;
        title?: string | null;
        total_purchased?: number | null;
        total_revenue?: number | null;
    }
}

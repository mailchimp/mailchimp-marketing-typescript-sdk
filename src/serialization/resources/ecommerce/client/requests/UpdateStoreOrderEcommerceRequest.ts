//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { EcommerceStoresCartsPatch } from "../../../../types/EcommerceStoresCartsPatch.js";
import { UpdateStoreOrderEcommerceRequestBillingAddress } from "../../types/UpdateStoreOrderEcommerceRequestBillingAddress.js";
import { UpdateStoreOrderEcommerceRequestCartId } from "../../types/UpdateStoreOrderEcommerceRequestCartId.js";
import { UpdateStoreOrderEcommerceRequestDiscountTotal } from "../../types/UpdateStoreOrderEcommerceRequestDiscountTotal.js";
import { UpdateStoreOrderEcommerceRequestLinesItem } from "../../types/UpdateStoreOrderEcommerceRequestLinesItem.js";
import { UpdateStoreOrderEcommerceRequestOrderTotal } from "../../types/UpdateStoreOrderEcommerceRequestOrderTotal.js";
import { UpdateStoreOrderEcommerceRequestOutreach } from "../../types/UpdateStoreOrderEcommerceRequestOutreach.js";
import { UpdateStoreOrderEcommerceRequestPromosItem } from "../../types/UpdateStoreOrderEcommerceRequestPromosItem.js";
import { UpdateStoreOrderEcommerceRequestShippingAddress } from "../../types/UpdateStoreOrderEcommerceRequestShippingAddress.js";
import { UpdateStoreOrderEcommerceRequestShippingTotal } from "../../types/UpdateStoreOrderEcommerceRequestShippingTotal.js";
import { UpdateStoreOrderEcommerceRequestTaxTotal } from "../../types/UpdateStoreOrderEcommerceRequestTaxTotal.js";
import { UpdateStoreOrderEcommerceRequestTrackingCode } from "../../types/UpdateStoreOrderEcommerceRequestTrackingCode.js";

export const UpdateStoreOrderEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreOrderEcommerceRequest, "storeId" | "orderId">
> = core.serialization.object({
    billingAddress: core.serialization.property(
        "billing_address",
        UpdateStoreOrderEcommerceRequestBillingAddress.optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    cartId: core.serialization.property("cart_id", UpdateStoreOrderEcommerceRequestCartId.optional()),
    cancelledAtForeign: core.serialization.property("cancelled_at_foreign", core.serialization.string().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    customer: EcommerceStoresCartsPatch.optional(),
    discountTotal: core.serialization.property(
        "discount_total",
        UpdateStoreOrderEcommerceRequestDiscountTotal.optional(),
    ),
    financialStatus: core.serialization.property("financial_status", core.serialization.string().optional()),
    fulfillmentStatus: core.serialization.property("fulfillment_status", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    landingSite: core.serialization.property("landing_site", core.serialization.string().optional()),
    lines: core.serialization.list(UpdateStoreOrderEcommerceRequestLinesItem).optional(),
    orderTotal: core.serialization.property("order_total", UpdateStoreOrderEcommerceRequestOrderTotal.optional()),
    orderUrl: core.serialization.property("order_url", core.serialization.string().optional()),
    outreach: UpdateStoreOrderEcommerceRequestOutreach.optional(),
    processedAtForeign: core.serialization.property("processed_at_foreign", core.serialization.string().optional()),
    promos: core.serialization.list(UpdateStoreOrderEcommerceRequestPromosItem).optional(),
    shippingAddress: core.serialization.property(
        "shipping_address",
        UpdateStoreOrderEcommerceRequestShippingAddress.optional(),
    ),
    shippingTotal: core.serialization.property(
        "shipping_total",
        UpdateStoreOrderEcommerceRequestShippingTotal.optional(),
    ),
    taxTotal: core.serialization.property("tax_total", UpdateStoreOrderEcommerceRequestTaxTotal.optional()),
    trackingCarrier: core.serialization.property("tracking_carrier", core.serialization.string().optional()),
    trackingCode: core.serialization.property("tracking_code", UpdateStoreOrderEcommerceRequestTrackingCode.optional()),
    trackingNumber: core.serialization.property("tracking_number", core.serialization.string().optional()),
    trackingUrl: core.serialization.property("tracking_url", core.serialization.string().optional()),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
});

export declare namespace UpdateStoreOrderEcommerceRequest {
    export interface Raw {
        billing_address?: UpdateStoreOrderEcommerceRequestBillingAddress.Raw | null;
        campaign_id?: string | null;
        cart_id?: UpdateStoreOrderEcommerceRequestCartId.Raw | null;
        cancelled_at_foreign?: string | null;
        currency_code?: string | null;
        customer?: EcommerceStoresCartsPatch.Raw | null;
        discount_total?: UpdateStoreOrderEcommerceRequestDiscountTotal.Raw | null;
        financial_status?: string | null;
        fulfillment_status?: string | null;
        id?: string | null;
        landing_site?: string | null;
        lines?: UpdateStoreOrderEcommerceRequestLinesItem.Raw[] | null;
        order_total?: UpdateStoreOrderEcommerceRequestOrderTotal.Raw | null;
        order_url?: string | null;
        outreach?: UpdateStoreOrderEcommerceRequestOutreach.Raw | null;
        processed_at_foreign?: string | null;
        promos?: UpdateStoreOrderEcommerceRequestPromosItem.Raw[] | null;
        shipping_address?: UpdateStoreOrderEcommerceRequestShippingAddress.Raw | null;
        shipping_total?: UpdateStoreOrderEcommerceRequestShippingTotal.Raw | null;
        tax_total?: UpdateStoreOrderEcommerceRequestTaxTotal.Raw | null;
        tracking_carrier?: string | null;
        tracking_code?: UpdateStoreOrderEcommerceRequestTrackingCode.Raw | null;
        tracking_number?: string | null;
        tracking_url?: string | null;
        updated_at_foreign?: string | null;
    }
}

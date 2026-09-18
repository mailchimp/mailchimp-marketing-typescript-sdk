//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { EcommerceStoresCartsPost } from "../../../../types/EcommerceStoresCartsPost.js";
import { CreateStoreOrderEcommerceRequestBillingAddress } from "../../types/CreateStoreOrderEcommerceRequestBillingAddress.js";
import { CreateStoreOrderEcommerceRequestCartId } from "../../types/CreateStoreOrderEcommerceRequestCartId.js";
import { CreateStoreOrderEcommerceRequestDiscountTotal } from "../../types/CreateStoreOrderEcommerceRequestDiscountTotal.js";
import { CreateStoreOrderEcommerceRequestLinesItem } from "../../types/CreateStoreOrderEcommerceRequestLinesItem.js";
import { CreateStoreOrderEcommerceRequestOrderTotal } from "../../types/CreateStoreOrderEcommerceRequestOrderTotal.js";
import { CreateStoreOrderEcommerceRequestOutreach } from "../../types/CreateStoreOrderEcommerceRequestOutreach.js";
import { CreateStoreOrderEcommerceRequestPromosItem } from "../../types/CreateStoreOrderEcommerceRequestPromosItem.js";
import { CreateStoreOrderEcommerceRequestShippingAddress } from "../../types/CreateStoreOrderEcommerceRequestShippingAddress.js";
import { CreateStoreOrderEcommerceRequestShippingTotal } from "../../types/CreateStoreOrderEcommerceRequestShippingTotal.js";
import { CreateStoreOrderEcommerceRequestTaxTotal } from "../../types/CreateStoreOrderEcommerceRequestTaxTotal.js";
import { CreateStoreOrderEcommerceRequestTrackingCode } from "../../types/CreateStoreOrderEcommerceRequestTrackingCode.js";

export const CreateStoreOrderEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreOrderEcommerceRequest, "storeId">
> = core.serialization.object({
    billingAddress: core.serialization.property(
        "billing_address",
        CreateStoreOrderEcommerceRequestBillingAddress.optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    cartId: core.serialization.property("cart_id", CreateStoreOrderEcommerceRequestCartId.optional()),
    cancelledAtForeign: core.serialization.property("cancelled_at_foreign", core.serialization.string().optional()),
    currencyCode: core.serialization.property("currency_code", core.serialization.string()),
    customer: EcommerceStoresCartsPost,
    discountTotal: core.serialization.property(
        "discount_total",
        CreateStoreOrderEcommerceRequestDiscountTotal.optional(),
    ),
    financialStatus: core.serialization.property("financial_status", core.serialization.string().optional()),
    fulfillmentStatus: core.serialization.property("fulfillment_status", core.serialization.string().optional()),
    id: core.serialization.string(),
    landingSite: core.serialization.property("landing_site", core.serialization.string().optional()),
    lines: core.serialization.list(CreateStoreOrderEcommerceRequestLinesItem),
    orderTotal: core.serialization.property("order_total", CreateStoreOrderEcommerceRequestOrderTotal),
    orderUrl: core.serialization.property("order_url", core.serialization.string().optional()),
    outreach: CreateStoreOrderEcommerceRequestOutreach.optional(),
    processedAtForeign: core.serialization.property("processed_at_foreign", core.serialization.string().optional()),
    promos: core.serialization.list(CreateStoreOrderEcommerceRequestPromosItem).optional(),
    shippingAddress: core.serialization.property(
        "shipping_address",
        CreateStoreOrderEcommerceRequestShippingAddress.optional(),
    ),
    shippingTotal: core.serialization.property(
        "shipping_total",
        CreateStoreOrderEcommerceRequestShippingTotal.optional(),
    ),
    taxTotal: core.serialization.property("tax_total", CreateStoreOrderEcommerceRequestTaxTotal.optional()),
    trackingCarrier: core.serialization.property("tracking_carrier", core.serialization.string().optional()),
    trackingCode: core.serialization.property("tracking_code", CreateStoreOrderEcommerceRequestTrackingCode.optional()),
    trackingNumber: core.serialization.property("tracking_number", core.serialization.string().optional()),
    trackingUrl: core.serialization.property("tracking_url", core.serialization.string().optional()),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
});

export declare namespace CreateStoreOrderEcommerceRequest {
    export interface Raw {
        billing_address?: CreateStoreOrderEcommerceRequestBillingAddress.Raw | null;
        campaign_id?: string | null;
        cart_id?: CreateStoreOrderEcommerceRequestCartId.Raw | null;
        cancelled_at_foreign?: string | null;
        currency_code: string;
        customer: EcommerceStoresCartsPost.Raw;
        discount_total?: CreateStoreOrderEcommerceRequestDiscountTotal.Raw | null;
        financial_status?: string | null;
        fulfillment_status?: string | null;
        id: string;
        landing_site?: string | null;
        lines: CreateStoreOrderEcommerceRequestLinesItem.Raw[];
        order_total: CreateStoreOrderEcommerceRequestOrderTotal.Raw;
        order_url?: string | null;
        outreach?: CreateStoreOrderEcommerceRequestOutreach.Raw | null;
        processed_at_foreign?: string | null;
        promos?: CreateStoreOrderEcommerceRequestPromosItem.Raw[] | null;
        shipping_address?: CreateStoreOrderEcommerceRequestShippingAddress.Raw | null;
        shipping_total?: CreateStoreOrderEcommerceRequestShippingTotal.Raw | null;
        tax_total?: CreateStoreOrderEcommerceRequestTaxTotal.Raw | null;
        tracking_carrier?: string | null;
        tracking_code?: CreateStoreOrderEcommerceRequestTrackingCode.Raw | null;
        tracking_number?: string | null;
        tracking_url?: string | null;
        updated_at_foreign?: string | null;
    }
}

//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCustomer } from "./ECommerceCustomer.js";
import { ECommerceOrderBillingAddress } from "./ECommerceOrderBillingAddress.js";
import { ECommerceOrderLineItem } from "./ECommerceOrderLineItem.js";
import { ECommerceOrderLinksItem } from "./ECommerceOrderLinksItem.js";
import { ECommerceOrderOrderTotal } from "./ECommerceOrderOrderTotal.js";
import { ECommerceOrderOutreach } from "./ECommerceOrderOutreach.js";
import { ECommerceOrderPromosItem } from "./ECommerceOrderPromosItem.js";
import { ECommerceOrderShippingAddress } from "./ECommerceOrderShippingAddress.js";
import { ECommerceOrderShippingTotal } from "./ECommerceOrderShippingTotal.js";
import { ECommerceOrderTaxTotal } from "./ECommerceOrderTaxTotal.js";
import { ECommerceOrderTrackingCode } from "./ECommerceOrderTrackingCode.js";

export const ECommerceOrder: core.serialization.ObjectSchema<serializers.ECommerceOrder.Raw, Mailchimp.ECommerceOrder> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ECommerceOrderLinksItem).optional()),
        billingAddress: core.serialization.property("billing_address", ECommerceOrderBillingAddress.optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        cartId: core.serialization.property("cart_id", core.serialization.string().optional()),
        cancelledAtForeign: core.serialization.property("cancelled_at_foreign", core.serialization.date().optional()),
        currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
        customer: ECommerceCustomer.optional(),
        discountTotal: core.serialization.property("discount_total", core.serialization.number().optional()),
        financialStatus: core.serialization.property("financial_status", core.serialization.string().optional()),
        fulfillmentStatus: core.serialization.property("fulfillment_status", core.serialization.string().optional()),
        id: core.serialization.string().optional(),
        landingSite: core.serialization.property("landing_site", core.serialization.string().optional()),
        lines: core.serialization.list(ECommerceOrderLineItem).optional(),
        orderTotal: core.serialization.property("order_total", ECommerceOrderOrderTotal.optional()),
        orderUrl: core.serialization.property("order_url", core.serialization.string().optional()),
        outreach: ECommerceOrderOutreach.optional(),
        processedAtForeign: core.serialization.property("processed_at_foreign", core.serialization.date().optional()),
        promos: core.serialization.list(ECommerceOrderPromosItem).optional(),
        shippingAddress: core.serialization.property("shipping_address", ECommerceOrderShippingAddress.optional()),
        shippingTotal: core.serialization.property("shipping_total", ECommerceOrderShippingTotal.optional()),
        storeId: core.serialization.property("store_id", core.serialization.string().optional()),
        taxTotal: core.serialization.property("tax_total", ECommerceOrderTaxTotal.optional()),
        trackingCarrier: core.serialization.property("tracking_carrier", core.serialization.string().optional()),
        trackingCode: core.serialization.property("tracking_code", ECommerceOrderTrackingCode.optional()),
        trackingNumber: core.serialization.property("tracking_number", core.serialization.string().optional()),
        trackingUrl: core.serialization.property("tracking_url", core.serialization.string().optional()),
        updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.date().optional()),
    });

export declare namespace ECommerceOrder {
    export interface Raw {
        _links?: ECommerceOrderLinksItem.Raw[] | null;
        billing_address?: ECommerceOrderBillingAddress.Raw | null;
        campaign_id?: string | null;
        cart_id?: string | null;
        cancelled_at_foreign?: string | null;
        currency_code?: string | null;
        customer?: ECommerceCustomer.Raw | null;
        discount_total?: number | null;
        financial_status?: string | null;
        fulfillment_status?: string | null;
        id?: string | null;
        landing_site?: string | null;
        lines?: ECommerceOrderLineItem.Raw[] | null;
        order_total?: ECommerceOrderOrderTotal.Raw | null;
        order_url?: string | null;
        outreach?: ECommerceOrderOutreach.Raw | null;
        processed_at_foreign?: string | null;
        promos?: ECommerceOrderPromosItem.Raw[] | null;
        shipping_address?: ECommerceOrderShippingAddress.Raw | null;
        shipping_total?: ECommerceOrderShippingTotal.Raw | null;
        store_id?: string | null;
        tax_total?: ECommerceOrderTaxTotal.Raw | null;
        tracking_carrier?: string | null;
        tracking_code?: ECommerceOrderTrackingCode.Raw | null;
        tracking_number?: string | null;
        tracking_url?: string | null;
        updated_at_foreign?: string | null;
    }
}

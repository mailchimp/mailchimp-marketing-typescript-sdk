//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCartLineItem } from "./ECommerceCartLineItem.js";
import { ECommerceCartLinksItem } from "./ECommerceCartLinksItem.js";
import { ECommerceCustomer } from "./ECommerceCustomer.js";

export const ECommerceCart: core.serialization.ObjectSchema<serializers.ECommerceCart.Raw, Mailchimp.ECommerceCart> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ECommerceCartLinksItem).optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        checkoutUrl: core.serialization.property("checkout_url", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
        customer: ECommerceCustomer.optional(),
        id: core.serialization.string().optional(),
        lines: core.serialization.list(ECommerceCartLineItem).optional(),
        orderTotal: core.serialization.property("order_total", core.serialization.number().optional()),
        taxTotal: core.serialization.property("tax_total", core.serialization.number().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace ECommerceCart {
    export interface Raw {
        _links?: ECommerceCartLinksItem.Raw[] | null;
        campaign_id?: string | null;
        checkout_url?: string | null;
        created_at?: string | null;
        currency_code?: string | null;
        customer?: ECommerceCustomer.Raw | null;
        id?: string | null;
        lines?: ECommerceCartLineItem.Raw[] | null;
        order_total?: number | null;
        tax_total?: number | null;
        updated_at?: string | null;
    }
}

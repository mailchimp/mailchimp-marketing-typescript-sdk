//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceOrderLineItemLinksItem } from "./ECommerceOrderLineItemLinksItem.js";
import { ECommerceOrderLineItemPrice } from "./ECommerceOrderLineItemPrice.js";

export const ECommerceOrderLineItem: core.serialization.ObjectSchema<
    serializers.ECommerceOrderLineItem.Raw,
    Mailchimp.ECommerceOrderLineItem
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommerceOrderLineItemLinksItem).optional()),
    discount: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    price: ECommerceOrderLineItemPrice.optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productTitle: core.serialization.property("product_title", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    productVariantTitle: core.serialization.property("product_variant_title", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace ECommerceOrderLineItem {
    export interface Raw {
        _links?: ECommerceOrderLineItemLinksItem.Raw[] | null;
        discount?: number | null;
        id?: string | null;
        image_url?: string | null;
        price?: ECommerceOrderLineItemPrice.Raw | null;
        product_id?: string | null;
        product_title?: string | null;
        product_variant_id?: string | null;
        product_variant_title?: string | null;
        quantity?: number | null;
    }
}

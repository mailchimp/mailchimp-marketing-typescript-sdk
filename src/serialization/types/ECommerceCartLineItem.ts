//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCartLineItemLinksItem } from "./ECommerceCartLineItemLinksItem.js";

export const ECommerceCartLineItem: core.serialization.ObjectSchema<
    serializers.ECommerceCartLineItem.Raw,
    Mailchimp.ECommerceCartLineItem
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommerceCartLineItemLinksItem).optional()),
    id: core.serialization.string().optional(),
    price: core.serialization.number().optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productTitle: core.serialization.property("product_title", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    productVariantTitle: core.serialization.property("product_variant_title", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace ECommerceCartLineItem {
    export interface Raw {
        _links?: ECommerceCartLineItemLinksItem.Raw[] | null;
        id?: string | null;
        price?: number | null;
        product_id?: string | null;
        product_title?: string | null;
        product_variant_id?: string | null;
        product_variant_title?: string | null;
        quantity?: number | null;
    }
}

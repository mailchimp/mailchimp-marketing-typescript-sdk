//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceProductVariantLinksItem } from "./ECommerceProductVariantLinksItem.js";

export const ECommerceProductVariant: core.serialization.ObjectSchema<
    serializers.ECommerceProductVariant.Raw,
    Mailchimp.ECommerceProductVariant
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommerceProductVariantLinksItem).optional()),
    backorders: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    id: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    inventoryQuantity: core.serialization.property("inventory_quantity", core.serialization.number().optional()),
    price: core.serialization.number().optional(),
    sku: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    url: core.serialization.string().optional(),
    visibility: core.serialization.string().optional(),
});

export declare namespace ECommerceProductVariant {
    export interface Raw {
        _links?: ECommerceProductVariantLinksItem.Raw[] | null;
        backorders?: string | null;
        created_at?: string | null;
        id?: string | null;
        image_url?: string | null;
        inventory_quantity?: number | null;
        price?: number | null;
        sku?: string | null;
        title?: string | null;
        updated_at?: string | null;
        url?: string | null;
        visibility?: string | null;
    }
}

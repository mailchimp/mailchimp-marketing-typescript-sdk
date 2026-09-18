//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpsertStoreProductEcommerceRequestVariantsItemId } from "./UpsertStoreProductEcommerceRequestVariantsItemId.js";
import { UpsertStoreProductEcommerceRequestVariantsItemPrice } from "./UpsertStoreProductEcommerceRequestVariantsItemPrice.js";

export const UpsertStoreProductEcommerceRequestVariantsItem: core.serialization.ObjectSchema<
    serializers.UpsertStoreProductEcommerceRequestVariantsItem.Raw,
    Mailchimp.UpsertStoreProductEcommerceRequestVariantsItem
> = core.serialization.object({
    backorders: core.serialization.string().optional(),
    id: UpsertStoreProductEcommerceRequestVariantsItemId,
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    inventoryQuantity: core.serialization.property("inventory_quantity", core.serialization.number().optional()),
    price: UpsertStoreProductEcommerceRequestVariantsItemPrice.optional(),
    sku: core.serialization.string().optional(),
    title: core.serialization.string(),
    url: core.serialization.string().optional(),
    visibility: core.serialization.string().optional(),
});

export declare namespace UpsertStoreProductEcommerceRequestVariantsItem {
    export interface Raw {
        backorders?: string | null;
        id: UpsertStoreProductEcommerceRequestVariantsItemId.Raw;
        image_url?: string | null;
        inventory_quantity?: number | null;
        price?: UpsertStoreProductEcommerceRequestVariantsItemPrice.Raw | null;
        sku?: string | null;
        title: string;
        url?: string | null;
        visibility?: string | null;
    }
}

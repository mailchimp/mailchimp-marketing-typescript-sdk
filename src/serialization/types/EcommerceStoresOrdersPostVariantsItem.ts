//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { EcommerceStoresOrdersPostVariantsItemId } from "./EcommerceStoresOrdersPostVariantsItemId.js";
import { EcommerceStoresOrdersPostVariantsItemPrice } from "./EcommerceStoresOrdersPostVariantsItemPrice.js";

export const EcommerceStoresOrdersPostVariantsItem: core.serialization.ObjectSchema<
    serializers.EcommerceStoresOrdersPostVariantsItem.Raw,
    Mailchimp.EcommerceStoresOrdersPostVariantsItem
> = core.serialization.object({
    backorders: core.serialization.string().optional(),
    id: EcommerceStoresOrdersPostVariantsItemId,
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    inventoryQuantity: core.serialization.property("inventory_quantity", core.serialization.number().optional()),
    price: EcommerceStoresOrdersPostVariantsItemPrice.optional(),
    sku: core.serialization.string().optional(),
    title: core.serialization.string(),
    url: core.serialization.string().optional(),
    visibility: core.serialization.string().optional(),
});

export declare namespace EcommerceStoresOrdersPostVariantsItem {
    export interface Raw {
        backorders?: string | null;
        id: EcommerceStoresOrdersPostVariantsItemId.Raw;
        image_url?: string | null;
        inventory_quantity?: number | null;
        price?: EcommerceStoresOrdersPostVariantsItemPrice.Raw | null;
        sku?: string | null;
        title: string;
        url?: string | null;
        visibility?: string | null;
    }
}

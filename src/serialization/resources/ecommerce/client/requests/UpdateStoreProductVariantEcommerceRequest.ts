//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreProductVariantEcommerceRequestPrice } from "../../types/UpdateStoreProductVariantEcommerceRequestPrice.js";

export const UpdateStoreProductVariantEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreProductVariantEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreProductVariantEcommerceRequest, "storeId" | "productId" | "variantId">
> = core.serialization.object({
    backorders: core.serialization.string().optional(),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    inventoryQuantity: core.serialization.property("inventory_quantity", core.serialization.number().optional()),
    price: UpdateStoreProductVariantEcommerceRequestPrice.optional(),
    sku: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    visibility: core.serialization.string().optional(),
});

export declare namespace UpdateStoreProductVariantEcommerceRequest {
    export interface Raw {
        backorders?: string | null;
        image_url?: string | null;
        inventory_quantity?: number | null;
        price?: UpdateStoreProductVariantEcommerceRequestPrice.Raw | null;
        sku?: string | null;
        title?: string | null;
        url?: string | null;
        visibility?: string | null;
    }
}

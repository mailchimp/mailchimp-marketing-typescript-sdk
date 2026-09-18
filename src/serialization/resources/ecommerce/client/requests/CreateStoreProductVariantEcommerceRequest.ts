//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStoreProductVariantEcommerceRequestId } from "../../types/CreateStoreProductVariantEcommerceRequestId.js";
import { CreateStoreProductVariantEcommerceRequestPrice } from "../../types/CreateStoreProductVariantEcommerceRequestPrice.js";

export const CreateStoreProductVariantEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreProductVariantEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreProductVariantEcommerceRequest, "storeId" | "productId">
> = core.serialization.object({
    backorders: core.serialization.string().optional(),
    id: CreateStoreProductVariantEcommerceRequestId,
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    inventoryQuantity: core.serialization.property("inventory_quantity", core.serialization.number().optional()),
    price: CreateStoreProductVariantEcommerceRequestPrice.optional(),
    sku: core.serialization.string().optional(),
    title: core.serialization.string(),
    url: core.serialization.string().optional(),
    visibility: core.serialization.string().optional(),
});

export declare namespace CreateStoreProductVariantEcommerceRequest {
    export interface Raw {
        backorders?: string | null;
        id: CreateStoreProductVariantEcommerceRequestId.Raw;
        image_url?: string | null;
        inventory_quantity?: number | null;
        price?: CreateStoreProductVariantEcommerceRequestPrice.Raw | null;
        sku?: string | null;
        title: string;
        url?: string | null;
        visibility?: string | null;
    }
}

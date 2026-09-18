//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreCartLineEcommerceRequestPrice } from "../../types/UpdateStoreCartLineEcommerceRequestPrice.js";

export const UpdateStoreCartLineEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreCartLineEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreCartLineEcommerceRequest, "storeId" | "cartId" | "lineId">
> = core.serialization.object({
    price: UpdateStoreCartLineEcommerceRequestPrice.optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace UpdateStoreCartLineEcommerceRequest {
    export interface Raw {
        price?: UpdateStoreCartLineEcommerceRequestPrice.Raw | null;
        product_id?: string | null;
        product_variant_id?: string | null;
        quantity?: number | null;
    }
}

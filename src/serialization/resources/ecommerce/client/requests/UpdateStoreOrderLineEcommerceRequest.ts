//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreOrderLineEcommerceRequestDiscount } from "../../types/UpdateStoreOrderLineEcommerceRequestDiscount.js";
import { UpdateStoreOrderLineEcommerceRequestPrice } from "../../types/UpdateStoreOrderLineEcommerceRequestPrice.js";

export const UpdateStoreOrderLineEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreOrderLineEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreOrderLineEcommerceRequest, "storeId" | "orderId" | "lineId">
> = core.serialization.object({
    discount: UpdateStoreOrderLineEcommerceRequestDiscount.optional(),
    id: core.serialization.string().optional(),
    price: UpdateStoreOrderLineEcommerceRequestPrice.optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace UpdateStoreOrderLineEcommerceRequest {
    export interface Raw {
        discount?: UpdateStoreOrderLineEcommerceRequestDiscount.Raw | null;
        id?: string | null;
        price?: UpdateStoreOrderLineEcommerceRequestPrice.Raw | null;
        product_id?: string | null;
        product_variant_id?: string | null;
        quantity?: number | null;
    }
}

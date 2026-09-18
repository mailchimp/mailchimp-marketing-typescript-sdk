//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { EcommerceStoresOrdersPost } from "../../../../types/EcommerceStoresOrdersPost.js";
import { CreateStoreOrderLineEcommerceRequestDiscount } from "../../types/CreateStoreOrderLineEcommerceRequestDiscount.js";
import { CreateStoreOrderLineEcommerceRequestPrice } from "../../types/CreateStoreOrderLineEcommerceRequestPrice.js";

export const CreateStoreOrderLineEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreOrderLineEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreOrderLineEcommerceRequest, "storeId" | "orderId">
> = core.serialization.object({
    discount: CreateStoreOrderLineEcommerceRequestDiscount.optional(),
    id: core.serialization.string(),
    price: CreateStoreOrderLineEcommerceRequestPrice,
    product: EcommerceStoresOrdersPost.optional(),
    productId: core.serialization.property("product_id", core.serialization.string()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string()),
    quantity: core.serialization.number(),
});

export declare namespace CreateStoreOrderLineEcommerceRequest {
    export interface Raw {
        discount?: CreateStoreOrderLineEcommerceRequestDiscount.Raw | null;
        id: string;
        price: CreateStoreOrderLineEcommerceRequestPrice.Raw;
        product?: EcommerceStoresOrdersPost.Raw | null;
        product_id: string;
        product_variant_id: string;
        quantity: number;
    }
}
